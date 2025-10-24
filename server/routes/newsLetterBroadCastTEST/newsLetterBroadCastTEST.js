import express from "express";
const router = express.Router();
import { sendNewsletter } from "../../utils/mailer.js";
import pool from "../../config/db.js";

router.post("/", async (req, res) => {
  const { to, title, content } = req.body;
  async function getArticleCount() {
    const result = await pool.query("SELECT COUNT(*) FROM public.articles"); // ако
    return parseInt(result.rows[0].count, 10);
  }
/*
    count - Number of articles
*/
  function getQuoteBlock(count) {
    if (count % 2 === 0) {
      return `
      <div style="text-align: center; font-style: italic; font-size: 14px; color: #555; margin-top: 40px;">
        🧠 За мислещи хора<br/>
        „Истинското развитие започва там, където свършва комфортът.“
      </div>
    `;
    } else {
      return `
      <div style="text-align: center; font-style: italic; font-size: 14px; color: #555; margin-top: 40px;">
        🐟 Аквариумна метафора<br/>
        „Както аквариумът се балансира с време, така и човекът — с търпение и опит.“
      </div>
    `;
    }
  }
  const articleCount = await getArticleCount();
  const quoteBlock = getQuoteBlock(articleCount);
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
      .websitelink {
      display: flex;
      flex-flow: row wrap;
      margin-top: 20px;
      text-align: center;
      justify-content: center;
      }
      .content-articles {
      font-size: 15px;
      color: #444;
      text-align: justify;
      }
      .title-articles {
      color: #333;
      }
      .title{
      text-align: center;
      }
      .brand {
      background-color: #f0f8ff;
      border-left: 4px solid #0070f3;
       padding: 20px;
        border-radius: 8px; 
        color: #333;
         margin-top: 30px;
      }
      
    </style>
    <div class="title">
      <img src="https://upload.d-dimitrov.eu/images/newsletter_icon.png" alt="New article added" width="64" />
      <h2 class="title-articles">📣 ${title}</h2>
    </div>

    <p class="content-articles ">${content}</p>

    <div class="websitelink">
      <a href="https://eng.d-dimitrov.eu" style="color: #0070f3; text-decoration: none; display: flex; gap: 5px; margin-right: 15px">🔗 Read more (ENG)</a>
      <a href="https://engineer.d-dimitrov.eu/" style="color: #0070f3; text-decoration: none; display: flex; gap: 2em">🔗 Прочети още (BG)</a>
    </div>

    <hr style="margin: 30px 0;" />

    <!-- Брандов блок -->
    <div class="brand">
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
    <hr style="margin: 30px 0;" />

    ${quoteBlock}
    
 <!--   <div style="text-align: center; font-style: italic; font-size: 14px; color: #555; margin-top: 40px;">
    🧠 За мислещи хора
    „Истинското развитие започва там, където свършва комфортът.“
    </div>
    <hr style="margin: 30px 0;" />
    <div style="text-align: center; font-style: italic; font-size: 14px; color: #555; margin-top: 40px;">
    🐟 Аквариумна метафора
    „Както аквариумът се балансира с време, така и човекът — с търпение и опит.“
    </div>-->
    <!-- Контакти и социални иконки -->
    <div style="font-size: 14px; color: #666; text-align: center; margin-top: 30px;">
      <p>📞 +359 8849 42 399</p>
      <p>📍 Ruse, Bulgaria</p>

      <div class="social-icons">
        <a href="https://www.facebook.com/mitaka1210" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/dimitar_dimitrov12/" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/instagram.png" alt="Instagram" />
        </a>
        <a href="https://x.com/dimitar1201" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/dimitar-dimitrov1201/" target="_blank">
          <img src="https://upload.d-dimitrov.eu/social-icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://t.me/@mitaka1210" target="_blank">
          <img src="https://upload.d-dimitrov.eu/icons/telegram.png" alt="Telegram" />
        </a>    
      </div>

      <!-- Отписване -->
      <div class="unsubsribe-buttons" style="margin-top: 20px;">
        <p class="eng-unsubscribe">
          ❌ Ако не желаеш да получаваш имейли, <a href="https://eng.d-dimitrov.eu/unsubscribe-test?email=${encodeURIComponent(to)}" style="color: red;">отпиши се тук</a>.
        </p>
        <p>
          ❌ Ако не желаеш да получаваш имейли, <a href="https://engineer.d-dimitrov.eu/unsubscribe-test?email=${encodeURIComponent(to)}" style="color: red;">отпиши се тук</a>.
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
