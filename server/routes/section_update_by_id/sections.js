import express from "express";
import { queryWithFailover } from "../../config/db.js";
import upload from "../../middlewares/upload.js";
import fs from "fs";
import path from "path";

const router = express.Router();

// Функция за изтриване на файл
const deleteFile = (filePath) => {
  if (!filePath) return;
  const absolutePath = path.join(process.cwd(), filePath);
  if (fs.existsSync(absolutePath)) {
    fs.unlinkSync(absolutePath);
    console.log(`Изтрит файл: ${absolutePath}`);
  }
};

// Променяме на .fields, за да хващаме главна снимка и масив от снимки за секции
router.post(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "section_image", maxCount: 10 },
  ]),
  async (req, res) => {
    const article_id = parseInt(req.params.id, 10);
    const { title, section, status, oldMainImage } = req.body;

    // 1. ПАРСВАНЕ: FormData праща масива като STRING, трябва ни като OBJECT
    let sectionsArray = [];
    try {
      sectionsArray =
        typeof section === "string" ? JSON.parse(section) : section;
    } catch (e) {
      return res.status(400).json({ error: "Invalid section data format" });
    }

    try {
      await queryWithFailover("BEGIN");

      // 2. ГЛАВНА СНИМКА (images_id)
      let mainImageUrl = oldMainImage;
      // ПРОВЕРКА: Само ако има качен НОВ файл 'image'
      if (req.files["image"] && req.files["image"].length > 0) {
        // Изтриваме физически стария файл само ако има нов
        if (oldMainImage) deleteFile(oldMainImage);
        mainImageUrl = `/upload/${req.files["image"][0].filename}`;
      }

      const articleQuery = `
          UPDATE articles
          SET title = COALESCE($1, title),
              status = $2,
              main_image_url = $3   -- Променено от mainimage на images_id
          WHERE id = $4 RETURNING *;
    `;
      await queryWithFailover(articleQuery, [
        title,
        status === "true",
        mainImageUrl,
        article_id,
      ]);

      // 3. СЕКЦИИ
      const sectionFiles = req.files["section_image"] || [];
      let fileCounter = 0;

      for (const sec of sectionsArray) {
        let currentSectionImage = sec.imageUrl;

        // Ако фронтендът е казал, че има нова снимка (hasNewImage: true)
        if (sec.hasNewImage && sectionFiles[fileCounter]) {
          if (sec.imageUrl) deleteFile(sec.imageUrl); // Изтриваме старата секционна снимка
          currentSectionImage = `/upload/${sectionFiles[fileCounter].filename}`;
          fileCounter++;
        }

        const updateSectionQuery = `
        UPDATE sections
        SET title = $1, content = $2, section_image_url = $3
        WHERE article_id = $4 AND position = $5
      `;
        const result = await queryWithFailover(updateSectionQuery, [
          sec.title,
          sec.content,
          currentSectionImage,
          article_id,
          sec.position,
        ]);

        // Ако няма такава секция (rowCount === 0), правим INSERT
        if (result.rowCount === 0) {
          const insertQuery = `
          INSERT INTO sections (article_id, position, title, content,section_image_url)
          VALUES ($1, $2, $3, $4, $5)
        `;
          await queryWithFailover(insertQuery, [
            article_id,
            sec.position,
            sec.title,
            sec.content,
            currentSectionImage,
          ]);
        }
      }

      await queryWithFailover("COMMIT");
      res.json({ message: "Успешно обновяване!" });
    } catch (error) {
      await queryWithFailover("ROLLBACK");
      console.error("ГРЕШКА:", error);
      res.status(500).json({ error: error.message });
    }
  },
);
export default router;
