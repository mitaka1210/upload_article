import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import pool from "../../config/db.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY; // Сложи сигурен ключ
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

    let { username, password, role } = req.body;

    try {
      if (username === "fena00721") {
        role = "super_admin";
      }
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
        // Increment failed attempts
        const failedAttempts = user.failed_attempts + 1;
        await pool.query(
          "UPDATE users SET failed_attempts = $1, blocked = $2 WHERE username = $3",
          [failedAttempts, failedAttempts >= 5, username],
        );

        if (failedAttempts >= 5) {
          return res.status(401).json({
            message:
              "You have reached the maximum number of login attempts. Please contact an administrator at the following email address:" +
              "dimitard185@gmail.com",
          });
        } else {
          return res
            .status(401)
            .json({ message: "Invalid username or password" });
        }
      }

      // Reset failed attempts on successful login
      await pool.query(
        "UPDATE users SET failed_attempts = 0 WHERE username = $1",
        [username],
      );
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
      const values = [user.username, user.password, user.role]; // Adjust role as needed
      await pool.query(query, values);
      res.json({ token, role: user.role, username: user.username });
    } catch (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
);
export default router;
