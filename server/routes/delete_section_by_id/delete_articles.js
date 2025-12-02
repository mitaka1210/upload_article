import express from "express";
import { queryWithFailover } from "../../config/db.js";

const router = express.Router();

// DELETE article by ID and section ID
router.delete("/:article_id/:position", async (req, res) => {
  const { article_id, position } = req.params;
  try {
    // Delete article by articleId and sectionId
    const deleteArticle = await queryWithFailover(
      "DELETE FROM sections WHERE article_id = $1 AND position = $2",
      [article_id, position],
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
