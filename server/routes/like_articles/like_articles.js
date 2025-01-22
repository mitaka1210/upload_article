import express from "express";
import pool from "../../config/db.js";

const router = express.Router();

// ?like
router.post("/:id", async (req, res) => {
  const { likes, results } = req.body;
  console.log("pesho", req.body);
  try {
    // transferTodosToArticles();
    await pool.query("UPDATE articles SET likes = $1 + 1 WHERE id = $2", [
      results.likes,
      results.todoId,
    ]);
    res.status(200).send("Liked");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

export default router;
