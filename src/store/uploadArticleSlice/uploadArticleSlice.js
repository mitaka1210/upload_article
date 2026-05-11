import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { addToast } from '../toast/toastSlice';
//!production
const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
// const url = `${process..env.REACT_APP_API_URL_LOCALHOST}`;

// Async thunk за качване на секция с изображение
export const uploadSection = createAsyncThunk('sections/upload', async (data, { rejectWithValue, dispatch }) => {
 try {
  const formData = new FormData();
  formData.append('article_id', data.article_id);
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('position', data.position);
  formData.append('category', data.category); // Ensure category is appended

  if (data.image) formData.append('image', data.image); // Снимка секция
  if (data.main_image) formData.append('main_image', data.main_image); // Главна снимка
  const response = await axios.post(`${url}/api/create/section`, formData, {
   // Changed 'data' to 'formData'
   headers: { 'Content-Type': 'multipart/form-data' },
  });
  dispatch(addToast({ message: 'Секцията е качена успешно!', type: 'success' }));
  return response.data;
 } catch (error) {
  const errorMessage = error.response?.data?.error || error.response?.data || 'Грешка при качване на секцията';
  dispatch(addToast({ message: errorMessage, type: 'error' }));
  return rejectWithValue(errorMessage);
 }
});

const sectionsSlice = createSlice({
 name: 'uploadArticle',
 initialState: {
  sections: [],
  loading: false,
  error: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(uploadSection.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(uploadSection.fulfilled, (state, action) => {
    state.loading = false;
    state.sections.push(action.payload);
   })
   .addCase(uploadSection.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
   });
 },
});

export default sectionsSlice.reducer;
