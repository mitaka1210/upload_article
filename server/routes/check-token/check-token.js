import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET_KEY = "your_secret_key"; // Сложи сигурен ключ

// Проверка на токен
router.get("/", (req, res) => {
  console.log("pesho auth", req.headers);
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ isAuthenticated: true, user: decoded });
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

export default router;
