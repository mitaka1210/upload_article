import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getTodo from '../../configuration/ api-endpoints';

// Асинхронно действие за изпращане на коментар
export const submitComment = createAsyncThunk('comments/submitComment', async ({ email, comment }, { rejectWithValue }) => {
 try {
  const response = await fetch(getTodo.POST_COMMENT, {
   method: 'POST',
   body: JSON.stringify({ email, comment }),
  });
  console.log('pesho', response.data);
  return response.data;
 } catch (error) {
  return rejectWithValue(error.response.data);
 }
});

const commentsSlice = createSlice({
 name: 'comments',
 initialState: {
  comments: [],
  status: 'idle',
  error: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(submitComment.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(submitComment.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.comments.push(action.payload);
   })
   .addCase(submitComment.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
   });
 },
});

export default commentsSlice.reducer;
