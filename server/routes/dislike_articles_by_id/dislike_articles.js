import express from "express";
import pool from "../../config/db.js";

const router = express.Router();

// //?dislike
router.post("/:id", async (req, res) => {
  const { dislikes, results } = req.body;
  console.log("pesho", req.body);
  try {
    // transferTodosToArticles();
    await pool.query("UPDATE articles SET dislikes = $1 + 1 WHERE id = $2", [
      dislikes,
      results.todoId,
    ]);
    res.status(200).send("Disliked");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
