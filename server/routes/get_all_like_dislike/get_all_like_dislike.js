import express from "express";
import { queryWithFailover } from "../../config/db.js";

const router = express.Router();

// //? get all likeDislike

router.get("/:article_id", async (req, res) => {
  const { article_id } = req.params;

  try {
    const query = `
            SELECT 
                COUNT(CASE WHEN type = 'like' THEN 1 END) AS likes,
                COUNT(CASE WHEN type = 'dislike' THEN 1 END) AS dislikes
            FROM article_likes_dislikes
            WHERE article_id = $1;
        `;

    const { rows } = await queryWithFailover(query, [article_id]);

    res.json({
      article_id,
      likes: rows[0].likes || 0,
      dislikes: rows[0].dislikes || 0,
    });
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
