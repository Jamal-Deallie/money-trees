import { createSlice, current } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      console.log(payload)
      const { user, token } = payload.data;
      state.user = user;
      state.token = token;
      console.log(user);
      console.log(token);
    },
    logOut: (state, {payload}) => {
      state.user = null
      state.token = null
  }
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const authReducer = authSlice.reducer;
