// server/routes/request-new-password.js
import express from "express";
import crypto from "crypto";
import pool from "../../config/db.js";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

router.post("/", async (req, res) => {
  const { email } = req.body;

  try {
    const userResult = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = userResult.rows[0];
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiration = new Date(Date.now() + 3600000); // 1 hour

    await pool.query(
      "UPDATE users SET reset_token = $1, reset_token_expiration = $2 WHERE email = $3",
      [resetToken, resetTokenExpiration, email],
    );

    const resetUrl = `http://your-frontend-url/reset-password?token=${resetToken}`;
    const mailOptions = {
      to: email,
      from: "your-email@gmail.com",
      subject: "Password Reset",
      text: `Please click the following link to reset your password: ${resetUrl}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Password reset email sent" });
  } catch (err) {
    console.error("Error requesting password reset:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
