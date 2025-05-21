// optimazed code

import express from "express";
import cors from "cors";
import corsOptions from "./config/cors.js";
import articlesGetAllRouter from "./routes/like_articles_by_id/articles.js";
import createArticle from "./routes/add_new_section/create-article.js";
import articlesCreateArticlesRouter from "./routes/create_articles/create_articles.js";
import articlesDeleteByIdRouter from "./routes/delete_articles_by_id/delete_articles_by_id.js";
import sectionDeleteByIdRouter from "./routes/delete_section_by_id/delete_articles.js";
import sectionUpdateByIdRouter from "./routes/section_update_by_id/sections.js";
import loginPage from "./routes/login_page/login_page.js";
import checkAuth from "./routes/check-token/check-token.js";
import createAccountRouter from "./routes/create_account/create_account.js";
import resetPasswordRouter from "./routes/reset-password/reset-password.js";
import requestNewPassword from "./routes/request-new-password/request-new-password.js";
import changeRole from "./routes/change_role/change_role.js";
import getAllLikeDislike from "./routes/get_all_like_dislike/get_all_like_dislike.js";
import addLikeOrDislike from "./routes/add_like_dislike/add_like_dislike.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3400;

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/articles", articlesGetAllRouter);
app.use("/api/create/section", createArticle);
app.use("/api/create/articles/header", articlesCreateArticlesRouter);
app.use("/api/delete/articles", articlesDeleteByIdRouter);
app.use("/api/delete/section", sectionDeleteByIdRouter);
app.use("/api/edit/article", sectionUpdateByIdRouter);
app.use("/api/get/all-like-dislike", getAllLikeDislike);
app.use("/api/post/like-dislike", addLikeOrDislike);
app.use("/api/login", loginPage);
app.use("/api/check-auth", checkAuth);
app.use("/api/create-account", createAccountRouter);
app.use("/api/reset-password", resetPasswordRouter);
app.use("/api/request-new-password", requestNewPassword);
app.use("/api/change-role", changeRole);

// Добави преди `app.listen()`
const uploadPath = path.join(process.cwd(), "upload"); // Работи в Docker
app.use("/uploads", express.static(uploadPath));
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
