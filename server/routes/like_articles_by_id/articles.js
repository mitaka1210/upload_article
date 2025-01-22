import express from "express";
import pool from "../../config/db.js";

const router = express.Router();

// GET all articles
// API за извличане на статии и секции
router.get("/", async (req, res) => {
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
export default router;
