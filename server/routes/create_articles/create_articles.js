import express from "express";
import { queryWithFailover } from "../../config/db.js";
import authAdmin from "../../middlewares/authAdmin.js";

const router = express.Router();

// POST create article
router.post("/", authAdmin, async (req, res) => {
  try {
    const { title, status } = req.body;
    const result = await queryWithFailover(
      "INSERT INTO articles (title,status) VALUES ($1, $2) RETURNING *",
      [title, status],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
