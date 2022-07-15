import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';
import { CustomLink, OutlineInput } from './styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSignUpUserMutation } from '../../features/users/usersSlice';

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || '/';
  const [signUpUser, { isSuccess }] = useSignUpUserMutation();

  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const canSave = [password, passwordConfirm].every(Boolean);

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await signUpUser({
          password,
          passwordConfirm,
        }).unwrap();
      } catch (err) {
        setError('Password Reset Failed');
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
          Reset Password
        </Typography>

        <Box sx={{ mt: 3 }} component='form' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
                  startAdornment={
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
            <CustomLink to='/' variant='body2'>
              Cancel
            </CustomLink>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
