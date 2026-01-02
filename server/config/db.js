import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});
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
export async function queryWithFailover(sql, params) {
  try {
    return await primaryPool.query(sql, params);
  } catch (err) {
    console.error("Primary DB failed, switching to failover:", err.message);
    return await failoverPool.query(sql, params);
  }
}
