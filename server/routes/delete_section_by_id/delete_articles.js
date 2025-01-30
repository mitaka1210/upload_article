import express from "express";
import pool from "../../config/db.js";

const router = express.Router();

// DELETE article by ID
router.delete("/:id", async (req, res) => {
  const { articleId, sectionId } = req.params;

  try {
    // Изтриване на статия
    const deleteArticle = await pool.query(
      "DELETE FROM articles WHERE articleId = $1 AND sectionId = $2",
      [articleId, sectionId],
    );

    if (deleteArticle.rowCount === 0) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
