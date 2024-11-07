const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const multer = require("multer");


//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//
//? create a todo

app.post("/todos", async (req, res) => {
  console.log("new todo", req.body);
  try {
    const {description, date, time, header} = req.body;
    const query = "INSERT INTO todos (description,date,time,header) VALUES($1, $2, $3, $4) RETURNING *";
    const newTodo = await pool.query(query, [description, date, time, header]);
    res.status(201).send("Данните са успешно добавени в базата.");
    res.json(newTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//? get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//? get a specific todo

app.get("/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [
      id
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//? update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {description} = req.body;
    const updateTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//? delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./upload");
//   },
//   filename: function (req, file, cb) {
//     return cb(null, file.originalname);
//   }
// });
const storage = multer.memoryStorage();
const path = require("path");
const upload = multer({storage});
// Обслужване на статични файлове от директорията 'uploads'
app.use("/uploads", express.static(path.join(__dirname, "upload")));

app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const fileBuffer = req.file.buffer;
  const fileName = req.file.originalname;
  // const filePath = path.join(req.file.path);
  try {
    // Изпълнение на SQL заявка за актуализиране на последния ред
    const result = await pool.query(`
      UPDATE todos
      SET images_path=$1,file_data=$2
      WHERE todo_id = (SELECT todo_id FROM todos ORDER BY todo_id DESC LIMIT 1)
    `, [fileName, fileBuffer]);

    if (result.rowCount === 0) {
      return res.status(404).send("No employee found to update.");
    }

    res.send("File successfully uploaded and database updated.");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/show-image", async (req, res) => {
  try {
    // Извличане на информацията за последния ред
    const result = await pool.query(`
      SELECT images_path, file_data
      FROM todos
      ORDER BY todo_id DESC
      LIMIT 1
    `);
    if (result.rows.length === 0) {
      return res.status(404).send("No image found.");
    }
    const fileData = result.rows[0].file_data;
    const fileName = result.rows[0].images_path;
    const fileType = fileName.split(".").pop();

    const base64File = fileData.toString("base64");
    const imageUrl = `data:image/${fileType};base64,${base64File}`;

    res.send(`
      <!doctype html>
      <html>
      <body>
        <h1>Last Uploaded Image</h1>
        <img src="${imageUrl}" alt="Uploaded Image">
      </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching the image.");
  }
});

//add comment
app.post("/comments", async (req, res) => {
  const {email, comment} = req.body;
  console.log("pesho", req.body);
  try {
    const query = "INSERT INTO comments (email, comment) VALUES ($1, $2) RETURNING *";
    const newComment = await pool.query(query, [email, comment]);
    res.json(newComment.rows);
    res.status(201).send("Данните са успешно добавени в базата.");
  } catch (error) {
    console.error("Error saving comment", error);
    res.status(500).send("Internal Server Error");
  }
});
//like
app.post("/api/like", async (req, res) => {
  const {likes, results} = req.body;
  console.log("pesho", req.body);
  try {
    transferTodosToArticles();
    await pool.query("UPDATE articles SET likes = $1 + 1 WHERE id = $2", [results.likes, results.todoId]);
    res.status(200).send("Liked");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
//dislike
app.post("/api/dislike", async (req, res) => {
  const {dislikes, results} = req.body;
  console.log("pesho", req.body);
  try {
    transferTodosToArticles();
    await pool.query("UPDATE articles SET dislikes = $1 + 1 WHERE id = $2", [dislikes, results.todoId]);
    res.status(200).send("Disliked");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
const transferTodosToArticles = async () => {
  try {
    // Стъпка 1: Извличане на всички записи от `todos`
    const todos = await pool.query("SELECT * FROM todos");
    const article = await pool.query("SELECT * FROM articles");
    console.log("pesho", todos.rows.length);

    // Стъпка 2 и 3: Вмъкване на данни в `articles`
    if (todos.rows.length !== article.rows.length) {
      // Начало на транзакция
      await pool.query("BEGIN");

      // Изчистване на таблицата
      await pool.query(`TRUNCATE TABLE ${"articles"} RESTART IDENTITY`);

      // Завършване на транзакцията
      await pool.query("COMMIT");
      for (const todo of todos.rows) {
        await pool.query(
          "INSERT INTO articles (id) VALUES ($1)",
          [todo.todo_id] // Предполага се, че структурата на `articles` включва `title`, `content`, и `date_published`
        );
      }
    }
    console.log("Data transferred successfully.");
  } catch (err) {
    console.error("Error transferring data", err);
    throw err;
  }
};
//? get all todos

app.get("/likesDislikes", async (req, res) => {
  try {
    const allArticles = await pool.query("SELECT * FROM articles");
    res.json(allArticles.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("server has started on port 5000");
});


