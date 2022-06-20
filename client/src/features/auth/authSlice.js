import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: {},
  name: '',
  creditScore: '',
  resetToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials: (state, { payload }) => {
      console.log({ credentials: payload });
      state.token = payload.token;
    },
    setUser: (state, { payload }) => {
      console.log(payload);
      state.firstName = payload.user.name;
      state.creditScore = payload.user.creditScore;
      state.resetToken = payload.user.resetToken;
      state.creditScore = payload.user.creditScore;
      
    },
    logOut: (state, { payload }) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, setUser, logOut } = authSlice.actions;

export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const authReducer = authSlice.reducer;
