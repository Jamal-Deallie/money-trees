import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Grid, Box, TextField, Button } from '@mui/material';

import { useSignInUserMutation } from '../../features/users/userSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errRef = useRef();

  const from = location.state?.from?.pathname || '/';

  const [signInUser, { isLoading, isSuccess, isError, data }] =
    useSignInUserMutation();

  useEffect(() => {
    if (isError) {
      errRef.current.focus();
    }
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials({ token: data.token, data }));
      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('name', JSON.stringify(data.user.firstName));
      navigate(from, { replace: true });
    }
  });

  const canSave = [email, password].every(Boolean) && !isLoading;
  console.log(email, password);
  const handleSubmit = async () => {
    if (canSave) {
      try {
        await signInUser({ email, password }).unwrap;
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Grid container component='main' sx={{ height: 'calc(100vh - 12rem)' }}>
      {isError && <Typography ref={errRef}>{isError}</Typography>}
      <Box component='form' noValidate sx={{ mt: 1 }}>
        <Typography>Sign In</Typography>
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
          aria-describedby='trash-desc'
        />
        {/* {userFocus && (
          <Typography id='trash-desc'>
            Please Enter Your Email Address
          </Typography>
        )} */}

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
        <Button
          onClick={handleSubmit}
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}>
          Submit
        </Button>
        {/* <CustomButton onClick={handleSubmit}>Login</CustomButton> */}
      </Box>
      <Link onClick={() => navigate('/forgotpassword')}>Forget Password</Link>

      <Link onClick={() => navigate('/signup')}>Create Account</Link>
    </Grid>
  );
}
