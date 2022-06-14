import React, { useState } from 'react';
import {
  SubmitButton,
  UpdateSection,
  Text,
  ValidationTextField,
} from './styles';
import {
  InputAdornment,
  TextField,
  FormGroup,
  FormControl,
  Box,
  Stack,
  Typography,
  Paper,
  FormHelperText,
} from '@mui/material';

export default function UpdateForm() {
  const [error, setError] = useState(false);
  const [creditScore, setCreditScore] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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

  const handleSubmit = async e => {
    e.preventDefault();
  };
  return (
    <UpdateSection>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            p: 4,
          }}>
          {error && <Typography>{error}</Typography>}

          <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
            <Stack spacing={2}>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='First Name'
                    value={firstName}
                    fullWidth
                    type='text'
                    name='firstName'
                    onChange={e => setFirstName(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormGroup>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Last Name'
                    value={lastName}
                    fullWidth
                    type='text'
                    name='lastName'
                    onChange={e => setLastName(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormGroup>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Email'
                    value={email}
                    fullWidth
                    type='email'
                    name='email'
                    onChange={e => setEmail(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormGroup>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Credit Score'
                    value={creditScore}
                    fullWidth
                    type='number'
                    name='creditScore'
                    onChange={e => setCreditScore(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormGroup>
              </FormControl>

              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
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
                </FormGroup>
              </FormControl>

              <SubmitButton variant='contained' sx={{ px: 5, py: 1.5 }}>
                Submit
              </SubmitButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </UpdateSection>
  );
}
