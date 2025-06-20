import express from "express";
import pool from "../../config/db.js";
import upload from "../../middlewares/upload.js";

const router = express.Router();

// POST заявка за добавяне на секция с изображение
router.post("/:id", upload.single("image"), async (req, res) => {
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
          WHERE id = $3 RETURNING *;
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
      if (!existingSec) {
        // Няма съществуваща секция — добавяме нова
        let position = 1;
        console.log(`Inserting new section at position ${sec.position}`);
        const insertQuery = `
      INSERT INTO sections (article_id, position, title, content, image_url)
      VALUES ($1, $2, $3, $4, $5)
    `;
        const insertValues = [
          article_id,
          position,
          sec.title,
          sec.content,
          image_url, // може да е null
        ];
        await pool.query(insertQuery, insertValues);
      } else if (
        existingSec.title !== sec.title ||
        existingSec.content !== sec.content ||
        existingSec.image_url !== image_url ||
        existingSec.position === sec.position
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
      } else {
        // Няма съществуваща секция — добавяме нова
        console.log(`Inserting new section at position ${sec.position}`);
        const insertQuery = `
      INSERT INTO sections (article_id, position, title, content, image_url)
      VALUES ($1, $2, $3, $4, $5)
    `;
        const insertValues = [
          article_id,
          sec.position,
          sec.title,
          sec.content,
          image_url, // може да е null
        ];
        await pool.query(insertQuery, insertValues);
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
export default router;
