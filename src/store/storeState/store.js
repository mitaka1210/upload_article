import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../commentForm/commentSlice';
import likesSlice from '../likesSlice/likesSlice';
import sectionsSlice from '../uploadArticleSlice/uploadArticleSlice';
import articlesSlice from '../getArticleData/getArticlesDataSlice';
import articlesSliceAdd from '../add-new-article/addNewArticleSlice';
import editSectionsSlice from '../editSections/editSectionsSlice';
import deleteSection from '../deleteArticleSection/deleteArticleSectionSlice';
import deleteArticlesSlice from '../deleteArticle/deleteArticleSlice';
import authReducer from '../login/authSlice';
import createAccountSlice from '../create_account/createAccountSlice';
import adminSlice from '../change_role/adminSlice';

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
  auth: authReducer,
  createAccount: createAccountSlice,
  roleManager: adminSlice,
 },
});

export default store;
