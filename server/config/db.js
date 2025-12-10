import pkg from "pg";
import dotenv from "dotenv";
import axios from "axios";

const { Pool } = pkg;

// Зареждане на .env файловете (за DB връзки и Telegram API ключове)
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

// --- TELEGRAM NOTIFICATION FUNCTION ---
const sendTelegramNotification = async (message) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram configuration missing. Cannot send notification.");
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: chatId,
      text: `🚨 [DB FAILOVER] ${message}`,
      parse_mode: "HTML", // Позволява форматиране
    });
  } catch (tgErr) {
    console.error("Failed to send Telegram notification:", tgErr.message);
  }
};
// --- END TELEGRAM FUNCTION ---

// ==========================================================
// 1. ИНИЦИАЛИЗАЦИЯ НА БАЗИТЕ ДАННИ (PRIMARY и FAILOVER)
// ==========================================================

// Primary DB Pool (Използва текущите ви DB_USER, DB_HOST и т.н.)
const primaryPool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    require: process.env.NODE_ENV === "production", // SSL само в production
    rejectUnauthorized: false,
  },
  // Допълнителни настройки за таймаут, за да се ускори откриването на грешки
  connectionTimeoutMillis: 5000, // 5 секунди
  idleTimeoutMillis: 30000,
});

// Failover DB Pool (Използва FAILOVER_DB_... променливите)
const failoverPool = new Pool({
  user: process.env.FAILOVER_DB_USER,
  password: process.env.FAILOVER_DB_PASSWORD,
  host: process.env.FAILOVER_DB_HOST,
  port: process.env.FAILOVER_DB_PORT,
  database: process.env.FAILOVER_DB_NAME,
  ssl: {
    require: process.env.NODE_ENV === "production",
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
});

// ==========================================================
// 2. ОСНОВНА ФУНКЦИЯ ЗА ЗАЯВКИ С FAILOVER ЛОГИКА
// ==========================================================

/**
 * Изпълнява SQL заявка, като автоматично превключва към Failover DB при грешка.
 * @param {string} sql - SQL заявката.
 * @param {Array<any>} params - Параметрите на заявката.
 * @returns {Promise<QueryResult>} Резултат от заявката.
 * @throws {Error} Ако и двете бази данни са недостъпни.
 */
export async function queryWithFailover(sql, params) {
  try {
    // 1. Опит за Primary DB
    return await primaryPool.query(sql, params);
  } catch (primaryErr) {
    console.error(
      `Primary DB (${process.env.DB_HOST}:${process.env.DB_PORT}) failed:`,
      primaryErr.message,
    );

    // Известяване в Telegram при първото падане
    await sendTelegramNotification(
      `Primary DB (${process.env.DB_HOST}) е DOWN. Превключване към резервната...`,
    );

    try {
      // 2. Опит за Failover DB
      return await failoverPool.query(sql, params);
    } catch (failoverErr) {
      // 3. Обработка на двойна грешка
      console.error("CRITICAL: Secondary DB also failed.", failoverErr.message);

      // Критично известяване
      await sendTelegramNotification(
        `КРИТИЧНА ГРЕШКА: И Primary, и Secondary DB са недостъпни! Приложението е неработещо.`,
      );

      // Хвърляне на грешка към по-горния слой (API ендпойнта)
      throw new Error("Не може да се установи връзка с нито една база данни.");
    }
  }
}
