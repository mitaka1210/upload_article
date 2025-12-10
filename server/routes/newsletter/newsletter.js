import express from "express";
import { queryWithFailover } from "../../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  try {
    // Check if email exists
    const result = await queryWithFailover(
      "SELECT id FROM newsletter_subscribers WHERE email = $1",
      [email],
    );
    if (result.rows.length > 0) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    // Insert new email
    await queryWithFailover(
      "INSERT INTO newsletter_subscribers(email) VALUES($1)",
      [email],
    );
    return res
      .status(200)
      .json({ message: "Subscription successful", email: email });
  } catch (error) {
    console.error("DB error:", error);
    return res.status(500).json({ error: "Database error" });
  }
});

export default router;
