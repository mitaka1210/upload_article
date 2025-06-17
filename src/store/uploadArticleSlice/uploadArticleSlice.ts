import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//!production
const url = `${import.meta.env.VITE_API_URL_PROD}`;

//!development
// const url = `${import.meta.env.VITE_API_URL}`;

// Async thunk for uploading a section with an image
export const uploadSection = createAsyncThunk('sections/upload', async (data: UpdatedForm, { rejectWithValue }) => {
 try {
  const response = await axios.post(`${url}/api/create/section`, data, {
   headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
 } catch (error) {
  return rejectWithValue((error as any).response?.data || ('Error uploading section' as string));
 }
});

const sectionsSlice = createSlice({
 name: 'uploadArticle',
 initialState: {
  sections: [] as Array<{
   id: number;
   title: string;
   content: string;
   position: string;
   image: string;
   status: boolean;
  }>,
  loading: false,
  error: null as string | null,
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
    state.error = action.payload as string;
   });
 },
});

export default sectionsSlice.reducer;

interface UpdatedForm {
 article_id: number;
 title: string;
 content: string;
 position: string;
 image: File | null;
 status: boolean;
}
