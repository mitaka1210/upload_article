import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axiosConfig';

//!production
const url = `${import.meta.env.VITE_API_URL_PROD}`;

//!development
// const url = `${import.meta.env.VITE_API_URL}`;

// Async action за изтриване
export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (articleId: number, { rejectWithValue }) => {
 try {
  const response = await axios.delete(`${url}/api/delete/articles/${articleId}`);
  return response.data;
 } catch (err) {
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
