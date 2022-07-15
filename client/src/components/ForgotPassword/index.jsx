import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useSignInUserMutation } from '../../features/users/usersSlice';
import { CustomInput, Text, Form, FormContainer, Subheader } from './styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [signInUser, { isLoading, isSuccess }] = useSignInUserMutation();

  const canSave = [email].every(Boolean) && !isLoading;

  if (isSuccess) {
    setEmail('');
    navigate(from, { replace: true });
  }

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await signInUser({ email }).unwrap();
      } catch (err) {
        if (!err?.originalStatus) {
          setError('Login Failed');
        }
      }
    }
  };

  return (
    <FormContainer>
      <Box sx={{ textAlign: 'center' }}>
        {error && (
          <Typography
            variant='body1'
            sx={{ color: 'primary.main', textAlign: 'center' }}>
            {error}
          </Typography>
        )}
      </Box>
      <Subheader variant='h2'>Forgot Password</Subheader>
      <Text>We will send you an email to reset your password</Text>
      <Form component='form' onSubmit={handleSubmit} maxWidth='md'>
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

        <Button type='submit' fullWidth variant='main' sx={{ mt: 5.5, mb: 2 }}>
          Sign Up
        </Button>

        <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
          <Link to='/cancel'>
            <Text>Go Back </Text>
          </Link>
        </Box>
      </Form>
    </FormContainer>
  );
}
