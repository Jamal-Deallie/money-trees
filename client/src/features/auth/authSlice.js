import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '',

  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.token;
      localStorage.setItem('token', JSON.stringify(state.token));
    },
    setUser: (state, { payload }) => {
      console.log({ user: payload });
      state.user = payload.user;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logOut: (state, { payload }) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { setCredentials, setUser, logOut } = authSlice.actions;

export const selectToken = state => state.auth.token;

export const selectName = state => state.auth.user;

export const selectUser = state => state.auth.user;

export const authReducer = authSlice.reducer;
