import express from "express";
import bcrypt from "bcrypt";
import pool from "../../config/db.js";

const router = express.Router();

// Endpoint to create a new account
router.post("/", async (req, res) => {
  const { username, first_name, lastName, email, password } = req.body;

  if (!first_name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const newUser = await pool.query(
      "INSERT INTO users (username,first_name,last_name, email, password)" +
        " VALUES ($1, $2, $3,$4,$5) RETURNING *",
      [username, first_name, lastName, email, hashedPassword],
    );

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
