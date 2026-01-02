import express from "express";
import { queryWithFailover } from "../../config/db.js";

const router = express.Router();

// GET all articles
// API за извличане на статии и секции
router.get("/", async (req, res) => {
  try {
    // Извличане на всички статии с техните секции
    const query = `
      SELECT a.id, a.title, a.status, a.main_image_url, a.created_at,
             s.id AS s_id, s.title AS s_title, s.content, s.position, s.section_image_url
      FROM articles a
      LEFT JOIN sections s ON a.id = s.article_id
      ORDER BY a.created_at DESC, s.position ASC;
    `;
    const { rows } = await queryWithFailover(query);

    const articles = rows.reduce((acc, row) => {
      if (!acc[row.id]) {
        acc[row.id] = {
          id: row.id,
          title: row.title,
          status: row.status,
          mainImage: row.main_image_url, // Главна снимка
          createdAt: row.created_at,
          sections: [],
        };
      }
      if (row.s_id) {
        acc[row.id].sections.push({
          position: row.position,
          title: row.s_title,
          content: row.content,
          imageUrl: row.section_image_url, // Снимка на секцията
        });
      }
      return acc;
    }, {});

    res.json(Object.values(articles));
  } catch (err) {
    res.status(500).json({ error: "Грешка при четене" });
  }
});
export default router;
