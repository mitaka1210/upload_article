import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;

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
  console.log("pesho", isProduction);
  if (!isProduction) {
    return await neonDevPool.query(sql, params); // dev → директно Neon
  }
  try {
    return await primaryPool.query(sql, params);
  } catch (err) {
    console.error("Primary DB failed, switching to failover:", err.message);
    return await failoverPool.query(sql, params);
  }
}
