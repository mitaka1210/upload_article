import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Асинхронна функция за актуализиране на секция
// Async thunk за качване на секция с изображение
export const updateSection = createAsyncThunk('sections/updateSection', async (data, { rejectWithValue }) => {
 const url = `${process.env.REACT_APP_API_URL_LOCALHOST}/api/edit/article`;

 try {
  const response = await axios.post(`${url}/${data.id}`, data, {
   headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
 } catch (error) {
  return rejectWithValue(error.response.data || 'Error uploading section');
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
