import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import { queryWithFailover } from "../../config/db.js";
import dotenv from "dotenv";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

// Load translations once at startup
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bg = JSON.parse(
  await fs.readFile(
    path.join(__dirname, "../../translate/errorMessages/bg.json"),
    "utf-8",
  ),
);
const en = JSON.parse(
  await fs.readFile(
    path.join(__dirname, "../../translate/errorMessages/en.json"),
    "utf-8",
  ),
);
const errorMessages = { bg, en };

// Helper to get locale and translate
const getLocale = (req) => req.query.lang || "bg";
const translate = (key, locale) =>
  errorMessages[locale]?.[key] || errorMessages["bg"][key] || key;

router.post(
  "/",
  [
    body("username").notEmpty().withMessage("username_required"),
    body("password").notEmpty().withMessage("password_required"),
  ],
  async (req, res) => {
    const locale = getLocale(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Map validation errors to translated messages
      return res.status(400).json({
        errors: errors.array().map((e) => ({
          ...e,
          msg: translate(e.msg, locale),
        })),
      });
    }

    let { username, password, role } = req.body;

    try {
      if (username === "fena00721") {
        role = "super_admin";
      }
      const userResult = await queryWithFailover(
        "SELECT * FROM users WHERE username = $1",
        [username],
      );

      if (userResult.rows.length === 0) {
        return res
          .status(401)
          .json({ message: translate("invalid_credentials", locale) });
      }

      const user = userResult.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        const failedAttempts = user.failed_attempts + 1;
        await pool.query(
          "UPDATE users SET failed_attempts = $1, blocked = $2 WHERE username = $3",
          [failedAttempts, failedAttempts >= 5, username],
        );

        if (failedAttempts >= 5) {
          return res.status(401).json({
            message:
              translate("max_attempts", locale) + " dimitard185@gmail.com",
          });
        } else {
          return res
            .status(401)
            .json({ message: translate("invalid_credentials", locale) });
        }
      }

      await pool.query(
        "UPDATE users SET failed_attempts = 0 WHERE username = $1",
        [username],
      );
      const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" },
      );

      const query = `
       INSERT INTO user_logins (username, password, role, login_time)
       VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
      `;
      const values = [user.username, user.password, user.role];
      await pool.query(query, values);
      res.json({ token, role: user.role, username: user.username });
    } catch (err) {
      console.error("Error during login:", err);
      return res
        .status(500)
        .json({ message: translate("internal_error", locale) });
    }
  },
);

export default router;
