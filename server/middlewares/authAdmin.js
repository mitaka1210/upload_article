import jwt from "jsonwebtoken";
import { queryWithFailover } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await queryWithFailover("SELECT * FROM users WHERE id = $1", [
      decoded.id,
    ]);

    if (
      user.rows.length === 0 ||
      !["admin", "super_admin"].includes(user.rows[0].role)
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = user.rows[0]; // ако ти трябва в route-а
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticateAdmin;
