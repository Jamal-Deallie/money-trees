import React, { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  Container,
} from '@mui/material';
import { MainButton, CustomInput, Text } from './styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSignUpUserMutation } from '../../features/users/usersSlice';

export default function ContactForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [signUpUser, { isSuccess }] = useSignUpUserMutation();

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const canSave = [name, email, message].every(Boolean);

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await signUpUser({
          name,
          email,
          message,
        });
      } catch (err) {
        if (!err?.originalStatus) {
          setError('Contact Form Failed to Send');
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
          Contact Us
        </Typography>

        <Box sx={{ mt: 3 }} component='form' onSubmit={handleSubmit}>
          <Grid container rowSpacing={5}>
            <Grid item xs={12}>
              <CustomInput
                name='name'
                fullWidth
                id='outlined-required'
                label='Name'
                onChange={e => setName(e.target.value)}
                value={name}
                autoFocus
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
              <CustomInput
                multiline
                rows={8}
                fullWidth
                type='text'
                id='message'
                label='Message'
                name='message'
                onChange={e => setMessage(e.target.value)}
                value={message}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <MainButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 5.5, mb: 2 }}>
            Submit
          </MainButton>

          <Grid item xs={12} sx={{ textAlign: 'center', pt: 5.5 }}>
            <Link to='/'>
              <Text variant='body2'>Cancel</Text>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
