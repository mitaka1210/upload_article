import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "mitaka",
  password: "mitaka",
  host: "192.168.55.5",
  port: 5434, // work
  database: "postgres",
});

export default pool;
