import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//!production
const url = `${import.meta.env.VITE_API_URL_PROD}`;

//!development
// const url = `${import.meta.env.VITE_API_URL}`;
// Async thunk for creating an account
export const createAccount = createAsyncThunk('account/createAccount', async (userData, thunkAPI) => {
 const response = await fetch(`${url}/api/create-account`, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
 });
 const data = await response.json();
 if (response.status === 401) {
  localStorage.clear();
  window.location.href = '/';
 }
 if (!response.ok) {
  return thunkAPI.rejectWithValue(data); // ✅ Връщаме грешката от `data`
 }
 localStorage.setItem('token', data.token); // Съхранява токена
 return data;
});

const createAccountSlice = createSlice({
 name: 'account',
 initialState: {
  userName: '',
  firstName: '',
  lastName: '',
  role: '',
  email: '',
  password: '',
  status: 'idle',
  errorCreate: null,
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
  setRole: (state, action) => {
   state.role = action.payload;
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
    state.role = '';
    state.email = '';
    state.password = '';
   })
   .addCase(createAccount.rejected, (state, action) => {
    state.status = 'failed';
    state.errorCreate = action.payload;
   });
 },
});

export const { setUserName, setFirstName, setLastName, setEmail, setRole, setPassword } = createAccountSlice.actions;

export default createAccountSlice.reducer;
