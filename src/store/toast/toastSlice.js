import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
 name: 'toast',
 initialState: {
  toasts: [],
 },
 reducers: {
  addToast: (state, action) => {
   const toast = {
    id: Date.now(),
    message: action.payload.message,
    type: action.payload.type || 'error', // error, success, warning, info
   };
   state.toasts.push(toast);
  },
  removeToast: (state, action) => {
   state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
  },
 },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
