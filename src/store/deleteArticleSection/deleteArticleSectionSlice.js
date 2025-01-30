// Async action за изтриване на секция
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteArticle } from '../deleteArticle/deleteArticleSlice';
// const url = `${process.env.REACT_APP_API_URL_PROD}`;//production

const url = `${process.env.REACT_APP_API_URL_LOCALHOST}`; //development
// Async action за изтриване
export const deleteSection = createAsyncThunk('sections/deleteSection', async (data, { rejectWithValue }) => {
 let article_id = data.articleId;
 let position = data.sectionId;
 try {
  return await axios.delete(`${url}/api/delete/section/${article_id}/${position}`);
 } catch (err) {
  return rejectWithValue(err.response.data);
 }
});

const deleteArticlesSlice = createSlice({
 name: 'deleteArticlesSections',
 initialState: {
  articles: [],
  sections: [],
  status: 'idle', // idle | loading | succeeded | failed
  loading: false,
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
   // Изтриване на секция
   .addCase(deleteSection.fulfilled, (state, action) => {
    state.loading = false;
    state.status = 'succeeded';
    state.sections = state.sections.filter((section) => section.id !== action.payload.id);
   })
   .addCase(deleteSection.rejected, (state, action) => {
    state.loading = false;
    state.status = 'failed';
    state.error = action.payload;
   });
 },
});

export default deleteArticlesSlice.reducer;
