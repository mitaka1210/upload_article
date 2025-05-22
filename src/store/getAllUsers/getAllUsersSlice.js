import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from '../../api/customBaseQuery';

export const api = createApi({
 reducerPath: 'api',
 baseQuery: customBaseQuery,
 endpoints: (builder) => ({
  getUsers: builder.query({
   query: () => '/users',
  }),
 }),
});

export const { useGetUsersQuery } = api;
