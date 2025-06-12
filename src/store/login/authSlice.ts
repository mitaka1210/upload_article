import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = `${process.env.REACT_APP_API_URL_PROD}`;

interface LoginParams {
 username: string;
 password: string;
 role: string;
}

interface CheckAuthParams {
 language: string;
}

interface User {
 username: string;
 role: string;
}

export const login = createAsyncThunk('auth/login', async ({ username, password, role }: LoginParams, { rejectWithValue }) => {
 try {
  const response = await fetch(`${url}/api/login`, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ username, password, role }),
  });
  const data = await response.json();

  if (response.status === 401) {
   localStorage.clear();
  }
  if (!response.ok) {
   throw new Error(data.message || 'Login failed');
  }

  localStorage.setItem('token', data.token);
  localStorage.setItem('role', data.role);
  localStorage.setItem('username', data.username);

  return data;
 } catch (error) {
  return rejectWithValue((error as Error).message);
 }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async ({ language }: CheckAuthParams, { rejectWithValue }) => {
 try {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(`${url}/api/check-auth?lang=${language}`, {
   headers: { Authorization: token },
  });

  const data = await response.json();
  if (!response.ok) {
   throw new Error(data.message || 'Authorization failed');
  }

  return data;
 } catch (error) {
  return rejectWithValue((error as Error).message);
 }
});

const authSlice = createSlice({
 name: 'auth',
 initialState: {
  user: null as User | null,
  isAuthenticated: false,
  loading: false,
  error: null as string | null,
 },
 reducers: {
  logout: (state) => {
   state.user = null;
   state.isAuthenticated = false;
   localStorage.removeItem('token');
  },
 },
 extraReducers: (builder) => {
  builder
   .addCase(login.pending, (state) => {
    state.loading = true;
    state.error = null;
   })
   .addCase(login.fulfilled, (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
   })
   .addCase(login.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string | null;
   })
   .addCase(checkAuth.pending, (state) => {
    state.loading = true;
   })
   .addCase(checkAuth.fulfilled, (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
   })
   .addCase(checkAuth.rejected, (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload as string | null;
   });
 },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
