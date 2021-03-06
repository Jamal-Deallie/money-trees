import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://money-trees-app.herokuapp.com/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        headers.set(
          'authorization',
          `Bearer ${token}`,
          'Access-Control-Allow-Origin',
          '*'
        );
      }
      return headers;
    },
  }),
  tagTypes: ['Transactions', 'User'],
  endpoints: builder => ({}),
});
