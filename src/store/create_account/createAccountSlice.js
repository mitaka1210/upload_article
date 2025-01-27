import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk for creating an account
export const createAccount = createAsyncThunk('account/createAccount', async (userData, thunkAPI) => {
 console.log('pesho', userData);
 const response = await fetch('http://localhost:3400/api/create-account', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
 });

 if (!response.ok) {
  const error = await response.json();
  return thunkAPI.rejectWithValue(error);
 }

 return response.json();
});

const createAccountSlice = createSlice({
 name: 'account',
 initialState: {
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  status: 'idle',
  error: null,
 },
 reducers: {
  setFirstName: (state, action) => {
   state.firstName = action.payload;
  },
  setUserName: (state, action) => {
   state.userName = action.payload;
  },
  setLastName: (state, action) => {
   state.lastName = action.payload;
  },
  setEmail: (state, action) => {
   state.email = action.payload;
  },
  setPassword: (state, action) => {
   state.password = action.payload;
  },
 },
 extraReducers: (builder) => {
  builder
   .addCase(createAccount.pending, (state) => {
    state.status = 'loading';
   })
   .addCase(createAccount.fulfilled, (state, action) => {
    state.status = 'succeeded';
    state.userName = '';
    state.firstName = '';
    state.lastName = '';
    state.email = '';
    state.password = '';
   })
   .addCase(createAccount.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
   });
 },
});

export const { setUserName, setFirstName, setLastName, setEmail, setPassword } = createAccountSlice.actions;

export default createAccountSlice.reducer;
