import express from "express";
import pool from "../../config/db.js";

const router = express.Router();

// //? get all likeDislike

router.get("/likesDislikes", async (req, res) => {
  try {
    const allArticles = await pool.query("SELECT * FROM articles");
    res.json(allArticles.rows);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
