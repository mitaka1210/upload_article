const config = {
  port: process.env.PORT || 3400,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  allowedOrigins: [
    "http://192.168.55.47:3333",
    "http://localhost:3333",
    "https://upload.d-dimitrov.eu",
  ],
};

export default config;
