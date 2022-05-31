import React, { useState, useCallback, useEffect, useRef } from 'react';
import { MainButton, FormWrap } from './styles';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, TextField } from '@mui/material';

import { useSignInUserMutation } from '../../features/users/usersSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const canSave = [email, password].every(Boolean) && !isLoading;
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      dispatch(setCredentials({ token: data.token, user: data.user }));
      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('name', JSON.stringify(data.user.firstName));
      localStorage.setItem(
        'creditScore',
        JSON.stringify(data.user.creditScore)
      );
      navigate('/dashboard');
    }
  }, [isSuccess, data, dispatch, navigate]);

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await signInUser({ email, password }).unwrap();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <FormWrap noValidate sx={{ mt: 1 }}>
      <Typography
        variant='h3'
        sx={{
          fontFamily: 'balboa, sans-serif',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
        Sign In
      </Typography>
      <TextField
        margin='normal'
        required
        fullWidth
        id='user'
        placeholder='Email'
        label='Email Address'
        onChange={e => setEmail(e.target.value)}
        value={email}
        autoFocus
      />

      <TextField
        margin='normal'
        required
        fullWidth
        label='Password'
        id='password'
        placeholder='Password'
        type='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <MainButton onClick={handleSubmit}>Submit</MainButton>
    </FormWrap>
  );
}
