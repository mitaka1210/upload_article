import pool from "./db.js";

import multer from "multer";

import express from "express";

import cors from "cors";

import { extname } from "node:path";
//ROUTES//
import fs from "fs";

const app = express();
//middleware
app.use(cors());
app.use(express.json()); //req.body

//порт
const PORT = 5000;
app.get("/show-image", async (req, res) => {
  try {
    // Извличане на информацията за последния ред
    const result = await pool.query(`
        SELECT data, filename
        FROM article
        ORDER BY images_id DESC
        LIMIT 1
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
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
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
    // Форматиране като масив
    res.json(mergedObjects);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// POST заявка за създаване на статия
app.post("/create-articles", async (req, res) => {
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

app.put("/sections/:id", async (req, res) => {
  const article_id = parseInt(req.params.id, 10); // ID на статията
  const { title, section } = req.body;

  // Проверка дали секциите са предоставени
  if (!section || !Array.isArray(section)) {
    return res.status(400).json({
      error: "Section array is required.",
    });
  }

  try {
    // Започваме транзакция
    await pool.query("BEGIN");

    // Актуализираме основната статия
    const articleQuery = `
        UPDATE articles
        SET title = COALESCE($1, title)
        WHERE id = $2
        RETURNING *;
    `;
    const articleValues = [title, article_id];
    const articleResult = await pool.query(articleQuery, articleValues);

    if (articleResult.rows.length === 0) {
      throw new Error("Article not found.");
    }

    // Извличаме съществуващите секции за тази статия
    const currentSectionsQuery = `
        SELECT id, title, content, position, image_url
        FROM sections
        WHERE article_id = $1;
    `;
    const currentSectionsResult = await pool.query(currentSectionsQuery, [
      article_id,
    ]);

    // Създаване на map за текущите секции по position
    const currentSectionsMap = currentSectionsResult.rows.reduce((acc, sec) => {
      acc[sec.position] = sec;
      return acc;
    }, {});

    // Обхождаме новите секции и актуализираме само при разлики
    for (const sec of section) {
      const existingSec = currentSectionsMap[sec.position];

      // Проверка за разлика (това сравнява съдържанието, заглавието и изображението)
      if (
        !existingSec ||
        existingSec.title !== sec.title ||
        existingSec.content !== sec.content ||
        existingSec.image_url !== sec.image_url
      ) {
        console.log(`Updating section with position ${sec.position}`);

        const sectionQuery = `
            UPDATE sections
            SET title     = $1,
                content   = $2,
                image_url = $3
            WHERE article_id = $4
              AND position = $5
        `;
        const sectionValues = [
          sec.title,
          sec.content,
          sec.image_url || null, // image_url е nullable
          article_id,
          sec.position,
        ];

        await pool.query(sectionQuery, sectionValues);
      }
    }

    // Комитваме транзакцията
    await pool.query("COMMIT");

    res.json({
      message: "Article and sections updated successfully.",
    });
  } catch (error) {
    console.error("Error updating article or sections:", error);

    // Ролбек при грешка
    await pool.query("ROLLBACK");
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(PORT, () => {
  console.log("server has started on port 5000");
});
