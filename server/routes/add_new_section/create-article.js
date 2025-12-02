import express from "express";
import { queryWithFailover } from "../../config/db.js";
import upload from "../../middlewares/upload.js";
import compressImage from "../../utils/compress-img-before-save.js";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { article_id, title, content, position } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (imagePath) {
      await compressImage(imagePath);
    }

    const result = await queryWithFailover(
      `INSERT INTO sections (article_id, title, content, position, image_url)
          VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [article_id, title, content, position, imagePath],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
