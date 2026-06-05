import express from "express";
import { sendNewsletter } from "../../utils/mailer.js";
import authAdmin from "../../middlewares/authAdmin.js";

const router = express.Router();

router.post("/", authAdmin, async (req, res) => {
  const { to, title, content } = req.body;

  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
      <div style="text-align: center;">
        <img src="https://upload.d-dimitrov.eu/images/newsletter_icon.png" alt="New article added" width="64" />
        <h2 style="color: #333;">📣 ${title}</h2>
      </div>

      <p style="font-size: 16px; color: #444;">${content}</p>

      <div style="margin-top: 20px; text-align: center;">
        <a href="https://eng.d-dimitrov.eu" style="color: #0070f3; text-decoration: none;">🔗 Read more (ENG)</a><br/>
        <br/>
        <a href="https://engineer.d-dimitrov.eu/" style="color: #0070f3; text-decoration: none;">🔗 Прочети още (BG)</a>
      </div>

      <hr style="margin: 30px 0;" />

      <div style="font-size: 14px; color: #666; text-align: center;">
        <p>📞 +359 8849 42 399</p>
        <p>📍 Ruse, Bulgaria</p>
        <p>
          <a href="https://facebook.com/yourprofile" style="color: #4267B2;">Facebook</a> |
          <a href="https://github.com/yourprofile" style="color: #333;">GitHub</a> |
          <a href="https://linkedin.com/in/yourprofile" style="color: #0A66C2;">LinkedIn</a>
        </p>
        <p>
          ❌ Ако не желаеш да получаваш имейли, <a href="https://eng.d-dimitrov.eu/unsubscribe?email=${encodeURIComponent(to)}" style="color: red;">отпиши се тук</a>.
          <br/>
          <br/>
          ❌ Ако не желаеш да получаваш имейли, <a href="https://engineer.d-dimitrov.eu//unsubscribe?email=${encodeURIComponent(to)}" style="color: red;">отпиши се тук</a>.
        </p>
        <img src="https://upload.d-dimitrov.eu/visit-card-qr-code.png" alt="QR визитка" width="100" style={{ marginTop: '10px' }} />      
      </div>
    </div>
  </div>
  `;

  try {
    await sendNewsletter(to, `🧪 Тест: ${title}`, html);
    res.json({ message: "Тестов имейл изпратен" });
  } catch (err) {
    res.status(500).json({ error: "Грешка при изпращане" });
  }
});

export default router;
