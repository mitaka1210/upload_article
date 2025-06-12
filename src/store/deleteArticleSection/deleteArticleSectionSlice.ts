import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteArticle } from '../deleteArticle/deleteArticleSlice';

const url = `${process.env.REACT_APP_API_URL_PROD}`;

interface DeleteSectionData {
 articleId: string;
 sectionId: number;
}

interface Section {
 id: number;
 articleId: string;
 position: number;
}

export const deleteSection = createAsyncThunk<Section, DeleteSectionData, { rejectValue: string }>('sections/deleteSection', async (data: DeleteSectionData, { rejectWithValue }) => {
 let article_id = data.articleId;
 let position = data.sectionId;
 try {
  return await axios.delete(`${url}/api/delete/section/${article_id}/${position}`);
 } catch (err) {
  return rejectWithValue((err as any).response.data);
 }
});

const deleteArticlesSlice = createSlice({
 name: 'deleteArticlesSections',
 initialState: {
  articles: [] as any[],
  sections: [] as Section[],
  status: 'idle', // idle | loading | succeeded | failed
  loading: false,
  error: null as string | null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(deleteArticle.pending, (state) => {
    state.loading = true;
    state.status = 'loading';
    state.error = null;
   })
   .addCase(deleteSection.fulfilled, (state, action) => {
    state.loading = false;
    state.status = 'succeeded';
    state.sections = state.sections.filter((section: Section) => section.id !== (action.payload as Section).id);
   })
   .addCase(deleteSection.rejected, (state, action) => {
    state.loading = false;
    state.status = 'failed';
    state.error = action.payload as string;
   });
 },
});

export default deleteArticlesSlice.reducer;
