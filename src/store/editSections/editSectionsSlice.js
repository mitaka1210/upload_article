import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { addToast } from '../toast/toastSlice';

//!production

const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
// const url = `${process..env.REACT_APP_API_URL_LOCALHOST}`;
// Async thunk за качване на секция с изображение
export const updateSection = createAsyncThunk('sections/updateSection', async (formData, { rejectWithValue, dispatch }) => {
 try {
  // Извличаме ID-то от FormData обекта
  const articleId = formData.get('id');

  const response = await axios.post(`${url}/api/edit/article/${articleId}`, formData);

  dispatch(addToast({ message: 'Секцията е обновена успешно!', type: 'success' }));
  return response.data;
 } catch (error) {
  const errorMessage = error.response?.data?.error || error.response?.data || 'Грешка при обновяване на секцията';
  dispatch(addToast({ message: errorMessage, type: 'error' }));
  return rejectWithValue(errorMessage);
 }
});
const editSectionsSlice = createSlice({
 name: 'sections',
 initialState: {
  isLoading: true,
  section: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(updateSection.pending, (state) => {
    state.status = 'loading';
    state.error = null;
    state.isLoading = true;
   })
   .addCase(updateSection.fulfilled, (state, action) => {
    console.log('pesho', action.payload);
    state.status = 'succeeded';
    state.isLoading = false;
    state.section.push(action.payload);
    state.error = null;
   })
   .addCase(updateSection.rejected, (state, action) => {
    state.status = 'failed';
    state.error = true;
    state.error = action.error.message;
   });
 },
});

export default editSectionsSlice.reducer;
// Забележка: Този ред е добавен във файлът src/store/index.js
