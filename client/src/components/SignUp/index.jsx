import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
  Button,
  FormControl,
} from '@mui/material';
import { CustomInput, OutlineInput } from './styles';
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
        setError('Registration Failed');
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
        <Box sx={{ textAlign: 'center' }}>
          {error && (
            <Typography
              variant='body1'
              sx={{ color: 'primary.main', textAlign: 'center' }}>
              {error}
            </Typography>
          )}
        </Box>
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

        <Box
          sx={{ mt: 3 }}
          component='form'
          onSubmit={handleSubmit}
          method='POST'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomInput
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
              <CustomInput
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
              <CustomInput
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
              <CustomInput
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
              <CustomInput
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
                <OutlineInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  value={password}
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
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-adornment-password-confirm'>
                  Password Confirm
                </InputLabel>
                <OutlineInput
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPasswordConfirm(e.target.value)}
                  name='passwordConfirm'
                  value={passwordConfirm}
                  endAdornment={
                    <InputAdornment position='start'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{ pointerEvents: 'click', color: 'primary.main' }}>
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
          <Button
            type='submit'
            fullWidth
            variant='main'
            sx={{ mt: 5.5, mb: 2 }}>
            Sign Up
          </Button>

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
