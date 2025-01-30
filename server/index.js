// optimazed code

import express from "express";
import cors from "cors";
import corsOptions from "./config/cors.js";
import articlesGetAllRouter from "./routes/like_articles_by_id/articles.js";
import articlesAddNewSectionRouter from "./routes/add_new_section/add_new_section.js";
import articlesCreateArticlesRouter from "./routes/create_articles/create_articles.js";
import articlesDeleteByIdRouter from "./routes/delete_articles_by_id/delete_articles_by_id.js";
import sectionDeleteByIdRouter from "./routes/delete_section_by_id/delete_articles.js";
import sectionUpdateByIdRouter from "./routes/section_update_by_id/sections.js";
import likeRouter from "./routes/like_articles/like_articles.js";
import dislikeRouter from "./routes/dislike_articles_by_id/dislike_articles.js";
import loginPage from "./routes/login_page/login_page.js";
import checkAuth from "./routes/check-token/check-token.js";
import createAccountRouter from "./routes/create_account/create_account.js";
import resetPasswordRouter from "./routes/reset-password/reset-password.js";
import requestNewPassword from "./routes/request-new-password/request-new-password.js";

const app = express();
const PORT = process.env.PORT || 3400;

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/articles", articlesGetAllRouter);
app.use("/api/create/section", articlesAddNewSectionRouter);
app.use("/api/create/articles/header", articlesCreateArticlesRouter);
app.use("/api/delete/articles", articlesDeleteByIdRouter);
app.use("/api/delete/section", sectionDeleteByIdRouter);
app.use("/api/edit/article", sectionUpdateByIdRouter);
app.use("/api/get/all-like-dislike", sectionUpdateByIdRouter);
app.use("/api/get/like", likeRouter);
app.use("/api/get/dislike", dislikeRouter);
app.use("/api/login", loginPage);
app.use("/api/check-auth", checkAuth);
app.use("/api/create-account", createAccountRouter);
app.use("/api/reset-password", resetPasswordRouter);
app.use("/api/request-new-password", requestNewPassword);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
