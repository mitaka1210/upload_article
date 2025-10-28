import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//!production
const baseUrl = `${process.env.REACT_APP_API_URL_PROD}`;
//!development
/*
const baseUrl = `${process.env.REACT_APP_API_URL_LOCALHOST}`;
*/
export const fetchSubscribers = createAsyncThunk('newsletter/fetchSubscribers', async (_, { rejectWithValue }) => {
 try {
  const res = await fetch(`${baseUrl}/api/subscribers`);
  if (!res.ok) throw new Error('Failed to fetch subscribers');
  const data = await res.json();
  return data.emails || [];
 } catch (err) {
  return rejectWithValue(err.message);
 }
});

export const sendBroadcast = createAsyncThunk('newsletter/sendBroadcast', async ({ title, content }, { rejectWithValue }) => {
 try {
  const res = await fetch(`${baseUrl}/api/broadcast`, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ title, content }),
  });
  if (!res.ok) {
   const text = await res.text();
   throw new Error(text || 'Broadcast failed');
  }
  return await res.json();
 } catch (err) {
  return rejectWithValue(err.message);
 }
});

export const sendTestBroadcast = createAsyncThunk('newsletter/sendTestBroadcast', async ({ to, title, content }, { rejectWithValue }) => {
 try {
  const res = await fetch(`${baseUrl}/api/broadcast-test`, {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ to, title, content }),
  });
  if (!res.ok) {
   const text = await res.text();
   throw new Error(text || 'Test broadcast failed');
  }
  return await res.json();
 } catch (err) {
  return rejectWithValue(err.message);
 }
});

const newsletterSlice = createSlice({
 name: 'newsletter',
 initialState: {
  subscribers: [],
  fetchStatus: 'idle',
  sendStatus: 'idle',
  testStatus: 'idle',
  error: null,
 },
 reducers: {},
 extraReducers: (builder) =>
  builder
   // fetchSubscribers
   .addCase(fetchSubscribers.pending, (state) => {
    state.fetchStatus = 'loading';
    state.error = null;
   })
   .addCase(fetchSubscribers.fulfilled, (state, action) => {
    state.fetchStatus = 'succeeded';
    state.subscribers = action.payload;
   })
   .addCase(fetchSubscribers.rejected, (state, action) => {
    state.fetchStatus = 'failed';
    state.error = action.payload;
   })
   // sendBroadcast
   .addCase(sendBroadcast.pending, (state) => {
    state.sendStatus = 'sending';
    state.error = null;
   })
   .addCase(sendBroadcast.fulfilled, (state) => {
    state.sendStatus = 'sent';
   })
   .addCase(sendBroadcast.rejected, (state, action) => {
    state.sendStatus = 'error';
    state.error = action.payload;
   })
   // sendTestBroadcast
   .addCase(sendTestBroadcast.pending, (state) => {
    state.testStatus = 'sending';
    state.error = null;
   })
   .addCase(sendTestBroadcast.fulfilled, (state) => {
    state.testStatus = 'sent';
   })
   .addCase(sendTestBroadcast.rejected, (state, action) => {
    state.testStatus = 'error';
    state.error = action.payload;
   }),
});

export const selectNewsletter = (state) => state.newsletter;
export default newsletterSlice.reducer;
