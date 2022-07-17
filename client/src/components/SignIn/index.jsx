import React, { useState, } from 'react';
import { FormWrap, CustomLink, CustomInput, OutlineInput } from './styles';
import {
  Button,
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
import { setCredentials, setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const canSave = [email, password].every(Boolean) && !isLoading;

  if (isSuccess) {
    dispatch(setCredentials({ token: data.token }));
    dispatch(
      setUser({
        user: {
          id: data.user._id,
          creditScore: data.user.creditScore,
          email: data.user.email,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          avatar: data.user.avatar,
        },
      })
    );
    setEmail('');
    setPassword('');
    navigate('/dashboard', { replace: true });
  }

  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await signInUser({
          email,
          password,
        }).unwrap();
      } catch (err) {
        setError('Sign In Failed');
      }
    }
  };

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
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ p: 2 }}
            method='POST'>
            <Stack spacing={4}>
              <CustomInput
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                inputProps={{
                  autoComplete: 'off',
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
                  endAdornment={
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
                <CustomLink to='/signup'>Create An Account</CustomLink>
              </Box>
              <Button
                type='submit'
                fullWidth
                variant='main'
                sx={{ mt: 5.5, mb: 2 }}>
                Sign In
              </Button>
            </Stack>
          </Box>
        </FormWrap>
      </Container>
    </Box>
  );
}
