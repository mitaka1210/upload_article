import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;

let primaryFailed = false;
let failoverNotified = false;
let healthCheckInterval = null;

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
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 10000,
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

primaryPool.on("error", (err) =>
  console.error("primaryPool idle error:", err.message),
);
failoverPool.on("error", (err) =>
  console.error("failoverPool idle error:", err.message),
);
neonDevPool.on("error", (err) =>
  console.error("neonDevPool idle error:", err.message),
);

function startHealthCheck() {
  if (healthCheckInterval !== null) return;

  const env = isProduction ? "PRODUCTION" : "DEVELOPMENT";

  healthCheckInterval = setInterval(async () => {
    try {
      await primaryPool.query("SELECT 1");

      primaryFailed = false;
      failoverNotified = false;
      clearInterval(healthCheckInterval);
      healthCheckInterval = null;

      console.log("Primary DB recovered. Routing restored to primary.");
      sendTelegramAlert(
        `✅ <b>DB Primary Recovered</b>\n\n` +
          `Environment: ${env}\n` +
          `Primary DB: ${process.env.DB_HOST}:${process.env.DB_PORT}\n` +
          `Routing has been restored to primary database.`,
      );
    } catch (_err) {
      // Primary still down — wait for next interval
    }
  }, 30000);
}

export async function queryWithFailover(sql, params) {
  const failover = isProduction ? failoverPool : neonDevPool;
  const env = isProduction ? "PRODUCTION" : "DEVELOPMENT";

  if (primaryFailed) {
    return await failover.query(sql, params);
  }

  try {
    return await primaryPool.query(sql, params);
  } catch (err) {
    console.error("Primary DB failed, switching to failover:", err.message);

    primaryFailed = true;
    startHealthCheck();

    if (!failoverNotified) {
      failoverNotified = true;
      sendTelegramAlert(
        `⚠️ <b>DB Failover Activated</b>\n\n` +
          `Environment: ${env}\n` +
          `Primary DB: ${process.env.DB_HOST}:${process.env.DB_PORT}\n` +
          `Error: ${err.message}\n\n` +
          `Switched to NeonDB backup.`,
      );
    }

    return await failover.query(sql, params);
  }
}
