import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//!production
const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
// const url = `${process.env.REACT_APP_API_URL_LOCALHOST}`;

// Async thunk за качване на секция с изображение
export const uploadSection = createAsyncThunk('sections/upload', async (data, { rejectWithValue }) => {
 try {
  const response = await axios.post(`${url}/api/create/section`, data, {
   headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
 } catch (error) {
  return rejectWithValue(error.response.data || 'Error uploading section');
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
