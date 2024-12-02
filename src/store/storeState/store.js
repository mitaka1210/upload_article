import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todoSlice/todoSlice";
import commentsReducer from "../commentForm/commentSlice";
import likesSlice from "../likesSlice/likesSlice";
import sectionsSlice from "../uploadArticleSlice/uploadArticleSlice";
import articlesSlice from "../getArticleData/getArticlesDataSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    articles: articlesSlice,
    comments: commentsReducer,
    likes: likesSlice,
    uploadArticle: sectionsSlice,
  },
});

export default store;
