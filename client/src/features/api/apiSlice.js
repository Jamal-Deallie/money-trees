import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api/v1',

    prepareHeaders: (headers, { getState }) => {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA1YzE1NGQ4YmQ5YWZlN2RhOGI1NCIsImlhdCI6MTY1Mzc5OTc2MSwiZXhwIjoxNjU2MzkxNzYxfQ.CCeKIop2yYxU7iJd3CP03DGTVrfcHcKiUwhxSbK4M_U';

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Transactions', 'User'],
  endpoints: builder => ({}),
});
