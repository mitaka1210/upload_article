import express from "express";
import { queryWithFailover } from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await queryWithFailover("SELECT 1");
    res.json({ status: "ok", activeDB: result.clientType });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

export default router;
