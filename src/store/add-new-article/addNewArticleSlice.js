import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axiosConfig';

//!production
// const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
const url = `${process.env.REACT_APP_API_URL_LOCALHOST}`;

// Async action за добавяне на статия
export const addArticle = createAsyncThunk('articles/addArticle', async ({ title, status }) => {
 const response = await axios.post(`${url}/api/create/articles/header`, {
  title,
  status,
 });
 return response.data;
});

const articlesSliceAdd = createSlice({
 name: 'articlesHeader',
 initialState: {
  articles: {},
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(addArticle.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(addArticle.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.articles = { ...action.payload };
   })
   .addCase(addArticle.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.error.message;
   });
 },
});

export default articlesSliceAdd.reducer;
