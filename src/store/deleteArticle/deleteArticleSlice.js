import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/articles';
// Async action за изтриване
export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (articleId, { rejectWithValue }) => {
 try {
  const response = await axios.delete(`${API_URL}/${articleId}`);
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
