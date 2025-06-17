import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axiosConfig';

//!production
const url = `${import.meta.env.VITE_API_URL_PROD}`;

//!development
// const url = `${import.meta.env.VITE_API_URL}`;
// Интерфейс за параметрите на addArticle
interface AddArticleParams {
 title: string;
 status: boolean; // примерно валидни статуси
}
interface AddArticleState {
 articles: Record<string, unknown>;
 status: 'idle' | 'loading' | 'succeeded' | 'failed';
 error: string | null;
}
// Async action за добавяне на статия
export const addArticle = createAsyncThunk('articles/addArticle', async ({ title, status }: AddArticleParams) => {
 const response = await axios.post(`${url}/api/create/articles/header`, { title, status });
 return response.data;
});
const initialState: AddArticleState = {
 articles: {},
 status: 'idle',
 error: null,
};
const articlesSliceAdd = createSlice({
 name: 'articlesHeader',
 initialState,
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
    state.error = action.error.message ?? null; // string или null
   });
 },
});

export default articlesSliceAdd.reducer;
