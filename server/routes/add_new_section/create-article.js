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
      const { article_id, title, content, position, category } = req.body;

      // Достъп до файловете при .fields()
      const sectionImagePath = req.files["image"]
        ? req.files["image"][0].filename
        : null;
      const mainImagePath = req.files["main_image"]
        ? req.files["main_image"][0].filename
        : null;

      if (sectionImagePath) await compressImage(sectionImagePath);
      if (mainImagePath) await compressImage(mainImagePath);

      // 1. Обновяваме статията с главната снимка и категорията (ако има такива)
      if (mainImagePath || category) {
        let updateFields = [];
        let updateValues = [];
        let paramIndex = 1;

        if (mainImagePath) {
          updateFields.push(`main_image_url = $${paramIndex++}`);
          updateValues.push(mainImagePath);
        }
        if (category) {
          updateFields.push(`category = $${paramIndex++}`);
          updateValues.push(category);
        }

        if (updateFields.length > 0) {
          await queryWithFailover(
            `UPDATE articles SET ${updateFields.join(", ")} WHERE id = $${paramIndex}`,
            [...updateValues, article_id],
          );
        }
      }

      // 2. Записваме секцията както досега (без категория, тъй като тя е за статията)
      const result = await queryWithFailover(
        `INSERT INTO sections (article_id, title, content, position, section_image_url)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [article_id, title, content, position, sectionImagePath],
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error in create-article route:", error);
      res.status(500).json({
        error: "Грешка при създаване на секция или обновяване на статия",
      });
    }
  },
);

export default router;
