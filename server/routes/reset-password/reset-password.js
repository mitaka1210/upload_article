// server/routes/reset-password.js
import express from "express";
import bcrypt from "bcrypt";
import pool from "../../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const userResult = await pool.query(
      "SELECT * FROM users WHERE reset_token = $1 AND reset_token_expiration > NOW()",
      [token],
    );
    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const user = userResult.rows[0];
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await pool.query(
      "UPDATE users SET password = $1, reset_token = NULL, reset_token_expiration = NULL WHERE id = $2",
      [hashedPassword, user.id],
    );

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Error resetting password:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
