import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;
// Зареждане на подходящия .env файл
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});
// const pool = new Pool({
//   user: "mitaka",
//   password: "mitaka",
//   host: "192.168.55.5",
//   port: "5434",
//   database: "postgres",
// });
export default pool;
