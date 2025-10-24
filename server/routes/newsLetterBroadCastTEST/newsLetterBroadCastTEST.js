import express from "express";
const router = express.Router();
import { sendNewsletter } from "../../utils/mailer.js";

router.post("/", async (req, res) => {
  const { to, title, content } = req.body;

  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
      <style>
      @media screen and (max-width: 480px) {
        .responsive-text { font-size: 15px !important; }
        .shield-icon { font-size: 18px !important; }
        .social-icons img { width: 28px !important; height: 28px !important; }
        .qr-code { width: 80px !important; }
      }

      @keyframes pulse-shield {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }

      .shield-icon {
        display: inline-block;
        animation: pulse-shield 2s infinite;
        font-size: 20px;
        margin-right: 6px;
      }

      .social-icons a {
        display: inline-block;
        margin: 0 6px;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .social-icons a:hover {
        transform: scale(1.2);
        opacity: 0.8;
      }

      .social-icons img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    </style>
    <div style="text-align: center;">
      <img src="https://upload.d-dimitrov.eu/images/newsletter_icon.png" alt="New article added" width="64" />
      <h2 style="color: #333;">📣 ${title}</h2>
    </div>

    <p style="font-size: 16px; color: #444;">${content}</p>

    <div style="margin-top: 20px; text-align: center;">
      <a href="https://eng.d-dimitrov.eu" style="color: #0070f3; text-decoration: none;">🔗 Read more (ENG)</a><br/><br/>
      <a href="https://engineer.d-dimitrov.eu/" style="color: #0070f3; text-decoration: none;">🔗 Прочети още (BG)</a>
    </div>

    <hr style="margin: 30px 0;" />

    <!-- Брандов блок -->
    <div style="background-color: #f0f8ff; border-left: 4px solid #0070f3; padding: 20px; border-radius: 8px; color: #333; margin-top: 30px;">
      <p class="responsive-text" style="font-size: 16px; line-height: 1.6; margin: 0;">
        <span class="shield-icon">🛡️</span><strong>Ти си част от нещо специално.</strong><br/>
        Бюлетинът на Димитър Димитров не е просто имейл — това е място за идеи, растеж и вдъхновение.<br/>
        Имейлът ти е тук, защото си се регистрирал доброволно. И той ще остане тук — защитен, уважаван, никога използван без причина.
      </p>
      <p style="text-align: right; font-style: italic; margin-top: 20px;">
        До следващия брой,<br/>
        <strong>Д.</strong>
      </p>
    </div>

    <!-- Контакти и социални иконки -->
    <div style="font-size: 14px; color: #666; text-align: center; margin-top: 30px;">
      <p>📞 +359 8849 42 399</p>
      <p>📍 Ruse, Bulgaria</p>

      <div class="social-icons">
        <a href="https://facebook.com/yourprofile" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://youtube.com/yourchannel" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/youtube.png" alt="YouTube" />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://yourwebsite.com" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/link.png" alt="Website" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          <img src="https://upload.d-dimitrov.eu/social-icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://t.me/yourchannel" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/telegram.png" alt="Telegram" />
        </a>
      </div>

      <!-- Отписване -->
      <div class="unsubsribe-buttons" style="margin-top: 20px;">
        <p class="eng-unsubscribe">
          ❌ Ако не желаеш да получаваш имейли, <a href="https://eng.d-dimitrov.eu/unsubscribe?email=${encodeURIComponent(to)}" style="color: red;">отпиши се тук</a>.
        </p>
        <p>
          ❌ Ако не желаеш да получаваш имейли, <a href="https://engineer.d-dimitrov.eu/unsubscribe?email=${encodeURIComponent(to)}" style="color: red;">отпиши се тук</a>.
        </p>
      </div>

      <!-- QR код -->
      <img src="https://upload.d-dimitrov.eu/visit-card-qr-code.png" alt="QR визитка" class="qr-code" width="100" style="margin-top: 10px;" />
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
