import React, { useState, useEffect } from 'react';
import { MainButton, FormWrap, CustomLink } from './styles';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, TextField, Container } from '@mui/material';
import { useSignInUserMutation } from '../../features/users/usersSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [signInUser, { isLoading, isSuccess, data, isError }] =
    useSignInUserMutation();

  const canSave = [email, password].every(Boolean) && !isLoading;

  if (isSuccess) {
    dispatch(setCredentials({ token: data.token, user: data.user }));
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.token));
    setEmail('');
    setPassword('');
    navigate('/dashboard');
  }

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await signInUser({ email, password }).unwrap();
      } catch (err) {
        if (!err?.originalStatus) {
          // isLoading: true until timeout occurs
          setError('No Server Response');
        } else if (err.originalStatus === 400) {
          setError('Missing Username or Password');
        } else if (err.originalStatus === 401) {
          setError('Unauthorized');
        } else {
          setError('Login Failed');
        }
      }
    }
  };

  const handleEmailInput = e => setEmail(e.target.value);

  const handlePasswordInput = e => setPassword(e.target.value);

  console.log(error);
  return (
    <Box sx={{ position: 'relative', height: 'auto', padding: '12.5rem 0' }}>
      <Container sx={{ position: 'relative', height: '60rem' }}>
        <FormWrap noValidate>
          {error && <Typography>{error}</Typography>}
          <Typography
            variant='h1'
            sx={{
              fontFamily: 'balboa, sans-serif',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Sign In
          </Typography>
          <Box sx={{ mt: 5 }}>
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
            <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
              <CustomLink to='/'>Forgot Password</CustomLink> |
              <CustomLink to='/'>Create An Account</CustomLink>
            </Box>

            <MainButton onClick={handleSubmit}>Submit</MainButton>
          </Box>
        </FormWrap>
      </Container>
    </Box>
  );
}
