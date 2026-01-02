import express from "express";
import { queryWithFailover } from "../../config/db.js";
import upload from "../../middlewares/upload.js";
import compressImage from "../../utils/compress-img-before-save.js";

const router = express.Router();

// Използваме .fields() за да хванем основната снимка и масив от снимки за секциите
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "main_image", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const { article_id, title, content, position } = req.body;

      // Достъп до файловете при .fields()
      const sectionImagePath = req.files["image"]
        ? req.files["image"][0].filename
        : null;
      const mainImagePath = req.files["main_image"]
        ? req.files["main_image"][0].filename
        : null;

      if (sectionImagePath) await compressImage(sectionImagePath);
      if (mainImagePath) await compressImage(mainImagePath);

      // 1. Първо обновяваме статията с главната снимка (ако има такава)
      if (mainImagePath) {
        await queryWithFailover(
          `UPDATE articles SET main_image_url = $1 WHERE id = $2`,
          [mainImagePath, article_id],
        );
      }

      // 2. Записваме секцията както досега
      const result = await queryWithFailover(
        `INSERT INTO sections (article_id, title, content, position, section_image_url)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [article_id, title, content, position, sectionImagePath],
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: "Грешка" });
    }
  },
);

export default router;
