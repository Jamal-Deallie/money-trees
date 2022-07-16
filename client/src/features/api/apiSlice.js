import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://money-trees-app.herokuapp.com/api/v1',
    mode: 'cors',
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Transactions', 'User'],
  endpoints: builder => ({}),
});
