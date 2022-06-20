import React, { useState, useEffect } from 'react';
import {
  MainButton,
  FormWrap,
  CustomLink,
  CustomInput,
  OutlineInput,
} from './styles';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Stack,
} from '@mui/material';
import { useSignInUserMutation } from '../../features/users/usersSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const canSave = [email, password].every(Boolean) && !isLoading;

  if (isSuccess) {
    dispatch(setCredentials({ token: data.token, user: data.user }));
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.token));
    setEmail('');
    setPassword('');
    navigate('/dashboard');
  }
  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

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
          <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
            <Stack spacing={4}>
              <CustomInput
                margin='normal'
                fullWidth
                id='user'
                placeholder='Email'
                label='Email Address'
                onChange={e => setEmail(e.target.value)}
                value={email}
                autoFocus
                inputProps={{
                  autoComplete: "off",
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlineInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  value={password}
                  autoComplete='new-password'
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{ pointerEvents: 'click', color: 'primary.main' }}>
                        {showPassword ? (
                          <VisibilityOff
                            fontSize='large'
                            sx={{ fill: 'primary.main' }}
                          />
                        ) : (
                          <Visibility fontSize='large' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
              <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
                <CustomLink to='/'>Forgot Password</CustomLink> |
                <CustomLink to='/'>Create An Account</CustomLink>
              </Box>

              <MainButton onClick={handleSubmit}>Submit</MainButton>
            </Stack>
          </Box>
        </FormWrap>
      </Container>
    </Box>
  );
}
