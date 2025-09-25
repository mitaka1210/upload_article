import express from "express";
const router = express.Router();
import { sendNewsletter } from "../../utils/mailer.js";
import pool from "../../config/db.js";

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT email FROM newsletter_subscribers");
  res.json({ emails: result.rows.map((r) => r.email) });
});

/*router.post("/broadcast", async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query("SELECT email FROM newsletter_subscribers");
  const emails = result.rows.map((r) => r.email);

  for (const email of emails) {
    await sendNewsletter(
      email,
      `🆕 ${title}`,
      `<h2>${title}</h2><p>${content}</p>`,
    );
  }

  res.json({ message: "Изпратено успешно" });
});*/

export default router;
