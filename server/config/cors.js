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
    "http://localhost:3000",
    "http://localhost:3500",
    "http://localhost:3001",
    "http://localhost:3003",
    "http://localhost:3002",
    "https://upload.d-dimitrov.eu",
    "https://share.d-dimitrov.eu",
    "https://upload-article.vercel.app",
    "https://eng-dimitrov.vercel.app",
    "https://d-dimitrov.vercel.app",
    "https://eng.d-dimitrov.eu",
    "https://stage-upload-article.vercel.app",
  ],
};

export default config;
