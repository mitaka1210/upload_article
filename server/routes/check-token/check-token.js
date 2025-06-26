import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

const getLocale = (req) => req.query.lang || "bg";

router.get("/", async (req, res) => {
  const locale = getLocale(req);

  // Dynamically import JSON files inside the async handler
  const bg = (await import("../../translate/errorMessages/bg.json", { assert: { type: "json" } })).default;
  const en = (await import("../../translate/errorMessages/en.json", { assert: { type: "json" } })).default;

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
    else if (err.name === "JsonWebTokenError") errorCode = "invalid_token_format";
    else if (err.name === "NotBeforeError") errorCode = "token_not_yet_valid";
    res.status(401).json({ message: translate(errorCode) });
  }
});

export default router;