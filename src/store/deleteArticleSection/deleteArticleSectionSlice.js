// Async action за изтриване на секция
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteArticle } from '../deleteArticle/deleteArticleSlice';

// Async action за изтриване
export const deleteSection = createAsyncThunk('sections/deleteSection', async ({ articleId, sectionId }, { rejectWithValue }) => {
 console.log('pesho', articleId, sectionId);

 const url = `${process.env.REACT_APP_API_URL_PROD}/api/delete/section`;

 try {
  return await axios.delete(`${url}/${articleId}/${sectionId}`);
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
