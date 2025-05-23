import express from "express";
import pool from "../../config/db.js";
import authenticateAdmin from "../../middlewares/authAdmin.js";

const router = express.Router();

router.get("/", authenticateAdmin, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
