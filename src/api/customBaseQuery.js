// src/api/customBaseQuery.js
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//!production
// const url = `${process.env.REACT_APP_API_URL_PROD}`;

//!development
const url = `${process.env.REACT_APP_API_URL_LOCALHOST}`;
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
  // 🔥 401 Unauthorized -> Изчистване и пренасочване
  localStorage.clear();
  window.location.href = '/';
 }

 return result;
};

export default customBaseQuery;
