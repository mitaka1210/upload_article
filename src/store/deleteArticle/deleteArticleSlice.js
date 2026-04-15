import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axiosConfig';
import { addToast } from '../toast/toastSlice';

//!production
const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
// const url = `${process..env.REACT_APP_API_URL_LOCALHOST}`;

// Async action за изтриване
export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (articleId, { rejectWithValue, dispatch }) => {
 try {
  const response = await axios.delete(`${url}/api/delete/articles/${articleId}`);
  dispatch(addToast({ message: 'Статията е изтрита успешно!', type: 'success' }));
  return response.data;
 } catch (err) {
  const errorMessage = err.response?.data?.error || 'Грешка при изтриване на статията';
  dispatch(addToast({ message: errorMessage, type: 'error' }));
  return rejectWithValue(err.response.data);
 }
});

const deleteArticlesSlice = createSlice({
 name: 'deleteArticles',
 initialState: {
  articles: [],
  loading: false,
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(deleteArticle.pending, (state) => {
    state.loading = true;
    state.status = 'loading';
    state.error = null;
   })
   .addCase(deleteArticle.fulfilled, (state, action) => {
    state.loading = false;
    state.status = 'succeeded';
    state.articles = state.articles.filter((article) => article.id !== action.meta.arg);
   })
   .addCase(deleteArticle.rejected, (state, action) => {
    state.loading = false;
    state.status = 'failed';
    state.error = action.payload;
   });
 },
});

export default deleteArticlesSlice.reducer;
