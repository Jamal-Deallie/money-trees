import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  TextField,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { MainButton } from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSignUpUserMutation } from '../../features/users/usersSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [signUpUser, { isSuccess }] = useSignUpUserMutation();

  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const TransformFileData = file => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    } else {
      setPhoto('');
    }
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const canSave = [
    firstName,
    lastName,
    email,
    creditScore,
    password,
    passwordConfirm,
  ].every(Boolean);

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
          avatar: photo,
        }).unwrap();
      } catch (err) {
        if (!err?.originalStatus) {
          setError('No Server Response');
        } else if (err.originalStatus === 400) {
          setError('Missing Required Fields');
        } else if (err.originalStatus === 401) {
          setError('Unauthorized');
        } else {
          setError('Registration Failed');
        }
      }
    }
  };

  return (
    <Container component='main' maxWidth='md'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {error && error.message && (
          <Typography sx={{ textAlign: 'center' }}>{error}</Typography>
        )}
        <Typography
          variant='h2'
          sx={{
            fontFamily: 'balboa, sans-serif',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            pb: 5.5,
          }}>
          Sign Up
        </Typography>

        <Box sx={{ mt: 3 }} component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                fullWidth
                id='outlined-required'
                label='First Name'
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type='number'
                id='creditScore'
                label='Credit Score'
                name='creditScore'
                onChange={e => setCreditScore(e.target.value)}
                value={creditScore}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Avatar'
                fullWidth
                type='file'
                accept='image/*'
                name='file'
                id='avatar'
                onChange={handleImageUpload}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={e => setEmail(e.target.value)}
                value={email}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  value={password}
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{ pointerEvents: 'click' }}>
                        {showPassword ? (
                          <VisibilityOff fontSize='large' />
                        ) : (
                          <Visibility fontSize='large' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-adornment-passwordConfirm'>
                  Password Confirm
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-passwordConfirm'
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPasswordConfirm(e.target.value)}
                  name='passwordConfirm'
                  value={passwordConfirm}
                  startAdornment={
                    <InputAdornment position='start'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{ pointerEvents: 'click' }}>
                        {showPassword ? (
                          <VisibilityOff fontSize='large' />
                        ) : (
                          <Visibility fontSize='large' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password Confirm'
                />
              </FormControl>
            </Grid>
          </Grid>
          <MainButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 5.5, mb: 2 }}>
            Sign Up
          </MainButton>

          <Grid item xs={12} sx={{ textAlign: 'center', pt: 5.5 }}>
            <Link to='/signin' variant='body2'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
