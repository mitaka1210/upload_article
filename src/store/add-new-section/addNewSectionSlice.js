import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//!production
// const url = `${process.env.REACT_APP_API_URL_PROD}`;
//!development
const url = `${process.env.REACT_APP_API_URL_LOCALHOST}`;
// Тук създаваме async thunk, който ще прави POST заявка
export const addSection = createAsyncThunk('sections/addSection', async ({ article_id, title, content, position, image }, { rejectWithValue }) => {
 try {
  const formData = new FormData();
  formData.append('article_id', article_id);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('position', position);
  if (image) {
   formData.append('image', image);
  }

  const response = await axios.post(`${url}/api/create/section`, formData, {
   headers: {
    'Content-Type': 'multipart/form-data',
   },
  });

  return response.data;
 } catch (err) {
  return rejectWithValue(err.response?.data || 'Server Error');
 }
});

const addSectionSlice = createSlice({
 name: 'addSection',
 initialState: {
  section: null,
  status: 'idle',
  error: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(addSection.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(addSection.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.section = action.payload;
   })
   .addCase(addSection.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
   });
 },
});

export default addSectionSlice.reducer;
