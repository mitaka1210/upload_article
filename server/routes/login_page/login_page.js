import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";

const router = express.Router();
const SECRET_KEY = "your_secret_key"; // Сложи сигурен ключ

// Mock база данни (замени с реална)
// Example users array
const users = [
  {
    id: 1,
    username: "admin",
    password: await bcrypt.hash("123", 10), // Hash the password before storing
  },
];

// Login API
router.post(
  "/",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    console.log("pesho", user);

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare("123", user.password);
    console.log("pesho", password);
    console.log("pesho", user.password);
    console.log("pesho", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" },
    );
    res.json({ token });
  },
);
export default router;
