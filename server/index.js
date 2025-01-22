import pool from "./config/db.js";

import multer from "multer";
import path from "path";
import express from "express";

import cors from "cors";
import { extname } from "node:path";
//ROUTES//
import { fileURLToPath } from "url";

const app = express();
//middleware
app.use(cors());
app.use(express.json()); //req.body

//порт
const PORT = 3400;

//add comment

//?like
// app.post("/api/like", async (req, res) => {
//   const { likes, results } = req.body;
//   console.log("pesho", req.body);
//   try {
//     transferTodosToArticles();
//     await pool.query("UPDATE articles SET likes = $1 + 1 WHERE id = $2", [
//       results.likes,
//       results.todoId,
//     ]);
//     res.status(200).send("Liked");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server error");
//   }
// });
//?dislike
// app.post("/api/dislike", async (req, res) => {
//   const { dislikes, results } = req.body;
//   console.log("pesho", req.body);
//   try {
//     transferTodosToArticles();
//     await pool.query("UPDATE articles SET dislikes = $1 + 1 WHERE id = $2", [
//       dislikes,
//       results.todoId,
//     ]);
//     res.status(200).send("Disliked");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server error");
//   }
// });

//? get all likeDislike

// app.get("/likesDislikes", async (req, res) => {
//   try {
//     const allArticles = await pool.query("SELECT * FROM articles");
//     res.json(allArticles.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
//new DB API call
// Конфигурация на Multer
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storagePath = path.join(__dirname, "../../", "uploads"); // Примерно
// разположение на папката извън проекта
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, storagePath);
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
                 a.status     AS status,
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
          status: row.status,
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
          status: row.status,
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

app.post("/sections/:id", upload.single("image"), async (req, res) => {
  const article_id = parseInt(req.params.id, 10); // ID на статията
  const { title, section, status } = req.body;
  const image_url = req.file ? `/upload/${req.file.originalname}` : null;
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
          SET title  = COALESCE($1, title),
              status = COALESCE($2, status)
          WHERE id = $3
          RETURNING *;
	 `;
    const articleValues = [title, status, article_id];
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
        existingSec.title !== sec.title ||
        existingSec.content !== sec.content ||
        existingSec.image_url !== image_url
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
          image_url, // image_url е nullable
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

// DELETE article by ID
app.delete("/articles/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Изтриване на статия
    const deleteArticle = await pool.query(
      "DELETE FROM articles WHERE id = $1",
      [id],
    );

    if (deleteArticle.rowCount === 0) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});
// DELETE section by ID
app.delete("/sections/:id", async (req, res) => {
  const id = req.params.id;
  console.log("pesho", id);

  try {
    // Изтриване на секция
    const deleteSection = await pool.query(
      "DELETE FROM sections WHERE position = $1",
      [id],
    );

    if (deleteSection.rowCount === 0) {
      return res.status(404).json({ message: "Section not found" });
    }

    res.status(200).json({ message: "Section deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log("server has started on port 5000");
});
