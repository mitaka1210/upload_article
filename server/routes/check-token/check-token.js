import express from "express";
import jwt from "jsonwebtoken";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

const router = express.Router();
// Зареждане на .env файловете (за DB връзки и Telegram API ключове)
dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development",
});

const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error("SECRET_KEY is not defined in the environment variables.");
}
const getLocale = (req) => req.query.lang || "bg";

router.get("/", async (req, res) => {
  const locale = getLocale(req);

  // Dynamically import JSON files inside the async handler

  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  let bg, en;
  try {
    bg = JSON.parse(
      await fs.readFile(
        path.join(__dirname, "../../translate/errorMessages/bg.json"),
        "utf-8",
      ),
    );
    en = JSON.parse(
      await fs.readFile(
        path.join(__dirname, "../../translate/errorMessages/en.json"),
        "utf-8",
      ),
    );
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to load translation files." });
  }

  const errorMessages = { bg, en };
  const translate = (key) =>
    errorMessages[locale]?.[key] || errorMessages["bg"][key] || key;

  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: translate("missing_token") });
  }

  try {
    jwt.verify(token, SECRET_KEY);
    res.json({ isAuthenticated: true });
  } catch (err) {
    let errorCode = "invalid_token";
    if (err.name === "TokenExpiredError") errorCode = "token_expired";
    else if (err.name === "JsonWebTokenError")
      errorCode = "invalid_token_format";
    else if (err.name === "NotBeforeError") errorCode = "token_not_yet_valid";
    res.status(401).json({ message: translate(errorCode) });
  }
});

export default router;
