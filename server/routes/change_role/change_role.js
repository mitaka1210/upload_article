// changeRole.js
import express from "express";
import { body, validationResult } from "express-validator";
import pool from "../../config/db.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const router = express.Router();

// Middleware за проверка на токена и дали е супер админ
const authenticateSuperAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await pool.query("SELECT * FROM users WHERE id = $1", [
      decoded.id,
    ]);

    if (user.rows.length === 0 || user.rows[0].role !== "super_admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    req.superAdmin = user.rows[0]; // можеш да го ползваш по-надолу
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Route: смяна на роля
router.put(
  "/",
  authenticateSuperAdmin,
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("newRole")
      .notEmpty()
      .withMessage("New role is required")
      .isIn(["user", "admin"])
      .withMessage("Invalid role"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, newRole } = req.body;

    try {
      if (req.superAdmin.role !== "super_admin") {
        return res.status(403).json({
          message: "Forbidden: Only super admin can change roles",
        });
      }

      const result = await pool.query(
        "UPDATE users SET role = $1 WHERE username = $2",
        [newRole, username],
      );

      if (result.rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "Role updated successfully" });
    } catch (err) {
      console.error("Error updating role:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
);

export default router;
