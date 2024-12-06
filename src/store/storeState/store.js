import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../todoSlice/todoSlice';
import commentsReducer from '../commentForm/commentSlice';
import likesSlice from '../likesSlice/likesSlice';
import sectionsSlice from '../uploadArticleSlice/uploadArticleSlice';
import articlesSlice from '../getArticleData/getArticlesDataSlice';
import articlesSliceAdd from '../add-new-article/addNewArticleSlice';
import editSectionsSlice from '../editSections/editSectionsSlice';

const store = configureStore({
  reducer: {
    todo: todoSlice,
    articlesSections: articlesSlice,
    comments: commentsReducer,
    likes: likesSlice,
    uploadArticle: sectionsSlice,
    articlesHeader: articlesSliceAdd,
    editSection: editSectionsSlice,
  },
});

export default store;
