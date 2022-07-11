import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const userAdapter = createEntityAdapter({
  selectId: data => data.id,
});

const initialState = userAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: ({
        firstName,
        lastName,
        email,
        creditScore,
        password,
        passwordConfirm,
        avatar,
      }) => ({
        method: 'POST',
        url: '/users/signup',
        body: {
          firstName,
          lastName,
          email,
          creditScore,
          password,
          passwordConfirm,
          avatar,
        },
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
        url: `/users/resetPassword`,
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
    updateMe: builder.mutation({
      query: ({ email, firstName, lastName, creditScore }) => ({
        url: `/users/updateMe`,
        method: 'PATCH',
        body: { email, firstName, lastName, creditScore },
        invalidatesTags: ['User'],
      }),
    }),
    updateAvatar: builder.mutation({
      query: ({ avatar }) => ({
        url: `/users/updateAvatar`,
        method: 'PATCH',
        body: { avatar },
        invalidatesTags: ['User'],
      }),
    }),
    getMe: builder.query({
      query: () => `/users/getme?fields=firstName`,
      transformResponse: response => {
        console.log(response);
        const { data } = response;
        return userAdapter.setAll(initialState, data);
      },
      providesTags: ['User'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateMeMutation,
  useUpdateAvatarMutation,
  useGetMeQuery,
} = extendedApiSlice;

export const selectUserResults = extendedApiSlice.endpoints.getMe.select();

export const selectUserData = createSelector(
  selectUserResults,
  UserResult => UserResult.data

  // normalized state object with ids & entities
);

export const {
  selectAll: selectMe,

  // Pass in a selector that returns the transaction slice of state
} = userAdapter.getSelectors(state => selectUserData(state) ?? initialState);

export const selectCreditScore = createSelector(
  selectMe,
  UserResult => UserResult.map(user => user.creditScore)

  // normalized state object with ids & entities
);

export const selectResetToken = createSelector(
  selectMe,
  UserResult => UserResult.map(user => user.resetToken)

  // normalized state object with ids & entities
);

