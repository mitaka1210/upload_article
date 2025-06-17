// src/api/customBaseQuery.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* eslint-disable no-undef */
//!production
// const url = `${import.meta.env.VITE_API_URL_PROD}`;

//!development
const url = `${import.meta.env.VITE_API_URL}`;
const baseQuery = fetchBaseQuery({
 baseUrl: `${url}/api`,
 prepareHeaders: (headers) => {
  const token = localStorage.getItem('token');
  if (token) {
   headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
 },
});

const customBaseQuery = async (args, api, extraOptions) => {
 const result = await baseQuery(args, api, extraOptions);

 if (result?.error?.status === 401) {
  // 🔥 401 Unauthorized -> Clear storage and redirect
  localStorage.clear();
  window.location.href = '/';
 }

 return result;
};
/* eslint-enable no-undef */

export default customBaseQuery;
