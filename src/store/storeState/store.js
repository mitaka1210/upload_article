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
import { api } from '../getAllUsers/getAllUsersSlice';
import newsletterSlice from '../news-letter-send/news-letter-slice';

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
  newsletterSlice: newsletterSlice,
  [api.reducerPath]: api.reducer,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
