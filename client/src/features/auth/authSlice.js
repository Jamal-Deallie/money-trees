import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {},
  name: '',
  creditScore: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials: (state, { payload }) => {
      console.log({ credentials: payload });

      state.name = payload.user.name;
      state.creditScore = payload.user.creditScore;
      state.token = payload.token;
    },
    logOut: (state, { payload }) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const authReducer = authSlice.reducer;
