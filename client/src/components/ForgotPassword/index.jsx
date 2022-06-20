import React, { useState } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useSignInUserMutation } from '../../features/users/usersSlice';
import {
  MainButton,
  CustomInput,
  Text,
  Form,
  FormContainer,
  Subheader,
} from './styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const canSave = [email].every(Boolean) && !isLoading;

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await signInUser({ email }).unwrap();
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

  return (
    <FormContainer>
      {error && <Typography>{error}</Typography>}
      <Subheader variant='h2'>Forgot Password</Subheader>
      <Text>We will send you an email to reset your password</Text>
      <Form component='form' onSubmit={handleSubmit} maxWidth='md' sx={{}}>
        <CustomInput
          margin='normal'
          fullWidth
          id='email'
          placeholder='Email'
          label='Email Address'
          onChange={e => setEmail(e.target.value)}
          value={email}
          autoFocus
          inputProps={{
            autoComplete: 'off',
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <MainButton onClick={handleSubmit}>Submit</MainButton>

        <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
          <Link to='/cancel'>
            <Text>Go Back </Text>
          </Link>
        </Box>
      </Form>
    </FormContainer>
  );
}
