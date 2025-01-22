import express from "express";
import pool from "../../config/db.js";
import upload from "../../middlewares/upload.js";

const router = express.Router();
//Add new section
router.post("/", upload.single("image"), async (req, res) => {
  const { article_id, title, content, position } = req.body;
  const image_url = req.file ? `/upload/${req.file.filename}` : null;

  try {
    const result = await pool.query(
      `INSERT INTO sections (article_id, title, content, position, image_url)
          VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [article_id, title, content, position, image_url],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

export default router;
