const Pool = require("pg").Pool;

const pool = new Pool({
  user: "mitaka",
  password: "mitaka",
  host: "192.168.55.5",
  // port: 6543,// home
  port: 5434,// work
  database: "postgres"
});

module.exports = pool;
