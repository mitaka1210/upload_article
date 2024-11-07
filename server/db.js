const Pool = require("pg").Pool;

const pool = new Pool({
  user: "mitaka",
  password: "mitaka",
  host: "localhost",
  // port: 6543,// home
  port: 5432,// work
  database: "postgres"
});

module.exports = pool;
