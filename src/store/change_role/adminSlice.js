import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//!production
// const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
const url = `${process.env.REACT_APP_API_URL_LOCALHOST}`;
export const changeUserRole = createAsyncThunk('admin/changeUserRole', async ({ username, newRole, token }, thunkAPI) => {
 try {
  const response = await fetch(`${url}/api/change-role`, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify({ username, newRole }),
  });

  if (!response.ok) {
   const data = await response.json();
   throw new Error(data.message || 'Failed to change role');
  }

  return await response.json();
 } catch (err) {
  return thunkAPI.rejectWithValue(err.message);
 }
});

const adminSlice = createSlice({
 name: 'admin',
 initialState: {
  status: 'idle',
  error: null,
  updatedUser: null,
 },
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(changeUserRole.pending, (state) => {
    state.status = 'loading';
    state.error = null;
   })
   .addCase(changeUserRole.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.updatedUser = action.payload.user;
   })
   .addCase(changeUserRole.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
   });
 },
});

export default adminSlice.reducer;
