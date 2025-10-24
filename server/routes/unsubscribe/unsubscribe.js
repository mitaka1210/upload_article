import express from "express";
const router = express.Router();
import pool from "../../config/db.js";

router.get("/", async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).send("Липсва email адрес.");
  }
  try {
    // Пример: маркирай абоната като отписан
    await pool.query(
      "UPDATE public.newsletter_subscribers SET subscribed = false WHERE email = $1",
      [email],
    );

    res.send(`
      <html>
        <head>
          <title>Отписване успешно</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f9f9f9;
              text-align: center;
              padding: 50px;
            }
            .message {
              background-color: #fff;
              padding: 30px;
              border-radius: 8px;
              display: inline-block;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .message h2 {
              color: #d00;
            }
          </style>
        </head>
        <body>
          <div class="message">
            <h2>❌ Успешно се отписахте</h2>
            <p>Имейлът <strong>${email}</strong> беше премахнат от списъка за бюлетини.</p>
            <p>Ако това е било грешка, можеш да се абонираш отново чрез сайта.</p>
          </div>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send("Грешка при отписване.");
  }
});

export default router;
