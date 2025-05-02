import express from "express";
import jwt from "jsonwebtoken";
import bg from "../../translate/errorMessages/bg.json" with { type: "json" };
import en from "../../translate/errorMessages/en.json" with { type: "json" };

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY; // Сложи сигурен ключ
const errorMessages = {
  bg: bg,
  en: en,
  // ... други езици
};
const getLocale = (req) => {
  return req.query.lang || "bg"; // Вземаме езика от query параметъра 'lang' или 'bg' по подразбиране
};
// Проверка на токен
router.get("/", (req, res) => {
  const locale = getLocale(req);
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
    if (err.name === "TokenExpiredError") {
      errorCode = "token_expired";
    } else if (err.name === "JsonWebTokenError") {
      errorCode = "invalid_token_format";
    } else if (err.name === "NotBeforeError") {
      errorCode = "token_not_yet_valid";
    }
    res.status(401).json({ message: translate(errorCode) });
  }
});

export default router;
