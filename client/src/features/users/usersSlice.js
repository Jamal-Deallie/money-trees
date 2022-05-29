import { apiSlice } from '../api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: ({ name, email, password, passwordConfirm }) => ({
        url: '/users/signup',
        method: 'post',
        body: JSON.stringify({ name, email, password, passwordConfirm }),
      }),
    }),
    signInUser: builder.mutation({
      query: ({ email, password }) => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        url: '/users/signin',
        body: { email, password },
      }),
    }),
    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: '/users/forgotPassword',
        method: 'post',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, password, passwordConfirm }) => ({
        url: `/users/forgotPassword${token}`,
        method: 'post',
        body: { token, password, passwordConfirm },
      }),
    }),
    refreshToken: builder.mutation({
      query: ({ token, password, passwordConfirm }) => ({
        url: '/users/refreshToken',
        method: 'get',
        body: { token, password, passwordConfirm },
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = extendedApiSlice;
