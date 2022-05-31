import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Typography,
  Grid,
  Box,
  TextField,
  Link,
  Container,
} from '@mui/material';
import { MainButton } from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignUpUserMutation } from '../../features/users/usersSlice';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {'Copyright © '}
      <Link color='inherit' href='https://test.com/'>
        Money Trees
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [signUpUser, { isLoading, isSuccess, isError, data }] =
    useSignUpUserMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate(from, { replace: true });
    }
  });

  const canSave =
    [firstName, lastName, email, creditScore, password, passwordConfirm].every(
      Boolean
    ) && !isLoading;
  console.log(
    firstName,
    lastName,
    email,
    creditScore,
    password,
    passwordConfirm
  );

  const handleSubmit = async e => {
    e.preventDefault();
    if (canSave) {
      try {
        await signUpUser({
          firstName,
          lastName,
          email,
          creditScore,
          password,
          passwordConfirm,
        }).unwrap;
        console.log({
          test: firstName,
          lastName,
          email,
          creditScore,
          password,
          passwordConfirm,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container component='main' maxWidth='md'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography
          variant='h2'
          sx={{
            fontFamily: 'balboa, sans-serif',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}>
          Money Trees
        </Typography>
        <Typography component='h1' variant='h5'>
          SIGN UP
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='First Name'
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                onChange={e => setLastName(e.target.value)}
                value={lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type='number'
                id='creditScore'
                label='Credit Score'
                name='creditScore'
                onChange={e => setCreditScore(e.target.value)}
                value={creditScore}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='passwordConform'
                label='Password Confirm'
                type='passwordConfirm'
                id='passwordConfirm'
                onChange={e => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
              />
            </Grid>
          </Grid>
          <MainButton
            onClick={handleSubmit}
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </MainButton>
          <Grid container justifyContent='flex-end' alignItems='center'>
            <Grid item xs={12}>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
