import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;

let failoverNotified = false;

async function sendTelegramAlert(message) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });
  } catch (err) {
    console.error("Failed to send Telegram alert:", err.message);
  }
}

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});
const isProduction = process.env.NODE_ENV === "production";

const primaryPool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: false,
});

const failoverPool = new Pool({
  user: process.env.FAILOVER_DB_USER,
  password: process.env.FAILOVER_DB_PASSWORD,
  host: process.env.FAILOVER_DB_HOST,
  port: process.env.FAILOVER_DB_PORT,
  database: process.env.FAILOVER_DB_NAME,
  ssl: { require: true, rejectUnauthorized: false },
});
const neonDevPool = new Pool({
  user: process.env.NEON_DEV_USER,
  password: process.env.NEON_DEV_PASSWORD,
  host: process.env.NEON_DEV_HOST,
  port: process.env.NEON_DEV_PORT,
  database: process.env.NEON_DEV_NAME,
  ssl: { require: true, rejectUnauthorized: false },
});
export async function queryWithFailover(sql, params) {
  const failover = isProduction ? failoverPool : neonDevPool;
  const env = isProduction ? "PRODUCTION" : "DEVELOPMENT";

  try {
    return await primaryPool.query(sql, params);
  } catch (err) {
    console.error("Primary DB failed, switching to failover:", err.message);

    if (!failoverNotified) {
      failoverNotified = true;
      sendTelegramAlert(
        `⚠️ <b>DB Failover Activated</b>\n\n` +
          `Environment: ${env}\n` +
          `Primary DB: ${process.env.DB_HOST}:${process.env.DB_PORT}\n` +
          `Error: ${err.message}\n\n` +
          `Switched to NeonDB backup.`
      );
    }

    return await failover.query(sql, params);
  }
}
