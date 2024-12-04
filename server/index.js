const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");
const multer = require("multer");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//порт
const PORT = 5000;
const HOST = "192.168.55.5";

//ROUTES//
const fs = require("fs");
const { extname } = require("node:path");
app.get("/show-image", async (req, res) => {
  try {
    // Извличане на информацията за последния ред
    const result = await pool.query(`
            SELECT data, filename
            FROM article
            ORDER BY images_id DESC LIMIT 1
        `);
    if (result.rows.length === 0) {
      return res.status(404).send("No image found.");
    }
    const fileData = result.rows[0].data;
    const fileName = result.rows[0].filename;
    const fileType = fileName.split(".").pop();
    const base64File = fileData.toString("base64");
    const imageUrl = `data:image/${fileType};base64,${base64File}`;
    // Write the Base64 data to a file
    fs.writeFile("image.png", base64File, "base64", (err) => {
      if (err) {
        console.log("Error saving image:", err);
      } else {
        console.log("Image saved as image.png");
      }
    });
    // console.log("pesho", res.json({ image: imageUrl }));
    res.json({ image: imageUrl });
    // res.json(todo.rows[0]);
    // res.send(`
    //   <!doctype html>
    //   <html>
    //   <body>
    //     <h1>Last Uploaded Image</h1>
    //     <img src="${imageUrl}" alt="Uploaded Image">
    //   </body>
    //   </html>
    // `);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching the image.");
  }
});

//add comment
app.post("/comments", async (req, res) => {
  const { email, comment } = req.body;
  console.log("pesho", req.body);
  try {
    const query =
      "INSERT INTO comments (email, comment) VALUES ($1, $2) RETURNING *";
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
  const { likes, results } = req.body;
  console.log("pesho", req.body);
  try {
    transferTodosToArticles();
    await pool.query("UPDATE articles SET likes = $1 + 1 WHERE id = $2", [
      results.likes,
      results.todoId,
    ]);
    res.status(200).send("Liked");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
//dislike
app.post("/api/dislike", async (req, res) => {
  const { dislikes, results } = req.body;
  console.log("pesho", req.body);
  try {
    transferTodosToArticles();
    await pool.query("UPDATE articles SET dislikes = $1 + 1 WHERE id = $2", [
      dislikes,
      results.todoId,
    ]);
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
          [todo.todo_id], // Предполага се, че структурата на `articles` включва `title`, `content`, и `date_published`
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
//new DB API call
// Конфигурация на Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + extname(file.originalname));
  },
});
const upload = multer({ storage });
// POST заявка за добавяне на секция с изображение
app.post("/sections", upload.single("image"), async (req, res) => {
  const { article_id, title, content, position } = req.body;
  const image_url = req.file ? `/upload/${req.file.filename}` : null;

  try {
    const result = await pool.query(
      `INSERT INTO sections (article_id, title, content, position, image_url)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [article_id, title, content, position, image_url],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

// API за извличане на статии и секции
app.get("/articles", async (req, res) => {
  try {
    // Извличане на всички статии с техните секции
    const articlesQuery = `
            SELECT a.id         AS article_id,
                   a.title      AS article_title,
                   a.created_at AS article_created_at,
                   s.id         AS section_id,
                   s.title      AS section_title,
                   s.content    AS section_content,
                   s.position   AS section_position,
                   s.image_url  AS section_image_url
            FROM articles a
                     LEFT JOIN sections s ON a.id = s.article_id
            ORDER BY a.id, s.position;
        `;
    const result = await pool.query(articlesQuery);

    // Групиране на данните
    let articles = [];
    result.rows.forEach((row) => {
      if (row.article_id != row.section_id) {
        articles.push({
          id: row.article_id,
          title: row.article_title,
          createData: row.article_created_at,
          images: row.section_image_url,
          sections: {
            position: row.section_position,
            title: row.section_title,
            content: row.section_content,
          },
        });
      } else {
        articles.push({
          id: row.article_id,
          title: row.article_title,
          createData: row.article_created_at,
          images: row.section_image_url,
          sections: {
            position: row.section_position,
            title: row.section_title,
            content: row.section_content,
          },
        });
      }
    });
    // Групиране и обединяване
    const mergedObjects = Object.values(
      articles.reduce((acc, obj) => {
        if (!acc[obj.id]) {
          // Ако обектът не съществува в резултата, добави го
          acc[obj.id] = { ...obj, sections: [obj.sections] };
        } else {
          // Ако вече съществува, добави секцията към масива
          acc[obj.id].sections.push(obj.sections);
        }
        return acc;
      }, {}),
    );

    console.log(mergedObjects);
    // Форматиране като масив
    res.json(mergedObjects);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// POST заявка за създаване на статия
app.post("/create-articles", async (req, res) => {
  const { title } = req.body;
  console.log("pesho", req.body);
  try {
    const { title } = req.body;
    const result = await pool.query(
      "INSERT INTO articles (title) VALUES ($1) RETURNING *",
      [title],
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT endpoint to update a section
app.put("/sections/:id", async (req, res) => {
  const sectionId = parseInt(req.params.id, 10);
  const { article_id, title, content, position, image_url } = req.body;

  if (!title || !position) {
    return res
      .status(400)
      .json({ error: "Title and position are required fields." });
  }

  try {
    const query = `
            UPDATE sections
            SET article_id = COALESCE($1, article_id),
                title      = COALESCE($2, title),
                content    = COALESCE($3, content),
                position   = COALESCE($4, position),
                image_url  = COALESCE($5, image_url),
                created_at = CURRENT_TIMESTAMP
            WHERE id = $6 RETURNING *;
        `;

    const values = [article_id, title, content, position, image_url, sectionId];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Section not found." });
    }

    res.json({
      message: "Section updated successfully.",
      section: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log("server has started on port 5000");
});
