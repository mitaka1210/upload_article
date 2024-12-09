import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../commentForm/commentSlice';
import likesSlice from '../likesSlice/likesSlice';
import sectionsSlice from '../uploadArticleSlice/uploadArticleSlice';
import articlesSlice from '../getArticleData/getArticlesDataSlice';
import articlesSliceAdd from '../add-new-article/addNewArticleSlice';
import editSectionsSlice from '../editSections/editSectionsSlice';
import deleteSection from '../deleteArticleSection/deleteArticleSectionSlice';
import deleteArticlesSlice from '../deleteArticle/deleteArticleSlice';

const store = configureStore({
 reducer: {
  articlesSections: articlesSlice,
  comments: commentsReducer,
  likes: likesSlice,
  uploadArticle: sectionsSlice,
  articlesHeader: articlesSliceAdd,
  editSection: editSectionsSlice,
  deleteArticle: deleteArticlesSlice,
  deleteSection: deleteSection,
 },
});

export default store;
