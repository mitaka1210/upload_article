const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const multer = require("multer");

/**
 * Middleware setup
 */
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests and puts the parsed data in req.body

/**
 * ROUTES
 */

/**
 * POST /todos - Create a new todo item
 * @param {Object} req.body - The todo item details
 * @returns {String} - Success message
 */
app.post("/todos", async (req, res) => {
  console.log("new todo", req.body);
  try {
    const { description, date, time, header } = req.body;
    const query =
      "INSERT INTO todos (description,date,time,header) VALUES($1, $2, $3, $4) RETURNING *";
    const newTodo = await pool.query(query, [description, date, time, header]);
    res.status(201).send("Данните са успешно добавени в базата.");
    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/**
 * GET /todos - Retrieve all todo items
 * @returns {Array} - List of all todo items
 */
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

/**
 * GET /todos/:id - Retrieve a specific todo item by id
 * @param {Number} req.params.id - The id of the todo item
 * @returns {Object} - The requested todo item
 */
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

/**
 * PUT /todos/:id - Update a specific todo item by id
 * @param {Number} req.params.id - The id of the todo item to update
 * @param {Object} req.body - The updated fields for the todo item
 * @returns {String} - Success message
 */
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2",
      [description, id],
    );
    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

/**
 * DELETE /todos/:id - Delete a specific todo item by id
 * @param {Number} req.params.id - The id of the todo item to delete
 * @returns {String} - Success message
 */
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todos WHERE todo_id = $1",
      [id],
    );
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

/**
 * File upload configuration
 */
const storage = multer.memoryStorage();
const path = require("path");
