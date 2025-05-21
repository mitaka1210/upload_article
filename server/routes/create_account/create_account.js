import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import pool from "../../config/db.js";

const router = express.Router();

// Secret key for JWT
const JWT_SECRET = "your_secret_key"; // Смени това с реална тайна стойност
console.log("pesho test123");
// Endpoint to create a new account
router.post(
  "/",
  // Validation middleware
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("first_name").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("role").notEmpty().withMessage("Username is required"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    console.log("pesho", req.body);
    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log("pesho", req.body);
    const { username, first_name, lastName, email, password, role } = req.body;

    try {
      // Check if the user already exists
      const userExists = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email],
      );
      if (userExists.rows.length > 0) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const newUser = await pool.query(
        "INSERT INTO users (username, first_name, last_name, email,role, password)" +
          " VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [username, first_name, lastName, email, role, hashedPassword],
      );

      // Generate a JWT token
      const token = jwt.sign(
        {
          id: newUser.rows[0].id,
          email: newUser.rows[0].email,
          role: "user",
        },
        JWT_SECRET,
        { expiresIn: "1h" }, // Token valid for 1 hour
      );

      res.status(201).json({
        message: "Account created successfully",
        user: {
          id: newUser.rows[0].id,
          username: newUser.rows[0].username,
          email: newUser.rows[0].email,
          role: "user",
        },
        token,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Server error" });
    }
  },
);

export default router;
// Compare this snippet from src/store/login/authSlice.js:
