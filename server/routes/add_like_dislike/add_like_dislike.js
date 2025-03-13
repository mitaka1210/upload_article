import express from "express";
import pool from "../../config/db.js";

const router = express.Router();

// //? get all likeDislike

router.post("/:article_id", async (req, res) => {
  const { article_id } = req.params;
  const { type } = req.body; // Очаква "like" или "dislike"

  if (type !== "like" && type !== "dislike") {
    return res
      .status(400)
      .json({ error: "Invalid type. Must be 'like' or 'dislike'." });
  }

  try {
    const query = `INSERT INTO article_likes_dislikes (article_id, type) VALUES ($1, $2)`;
    await pool.query(query, [article_id, type]);

    res.json({ message: `Successfully added ${type}.` });
  } catch (error) {
    console.error("Error inserting like:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
