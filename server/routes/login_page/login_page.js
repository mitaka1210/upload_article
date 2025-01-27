import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import pool from "../../config/db.js";

const router = express.Router();
const SECRET_KEY = "your_secret_key"; // Сложи сигурен ключ

// Mock база данни (замени с реална)
// Example users array
const users = [
  {
    id: 1,
    username: "admin",
    password: await bcrypt.hash("123", 10), // Hash the password before storing
  },
];

// Login API
router.post(
  "/",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      // Check if the user exists
      const userResult = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username],
      );

      if (userResult.rows.length === 0) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const user = userResult.rows[0];

      // Verify the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" },
      );

      // Insert login record into user_logins table
      const query = `
       INSERT INTO user_logins (username, password, role, login_time)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
   `;
      const values = [user.username, user.password, "user"]; // Adjust role as needed

      await pool.query(query, values);

      res.json({ token });
    } catch (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
);
export default router;
