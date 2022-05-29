import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { StyledButton, UserSection, Text, ValidationTextField } from './styles';
import FormHelperText from '@mui/material/FormHelperText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function GoalForm() {
  const [cashBal, setCashBal] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('Required');
  const [date, setDate] = useState('');

  const onSubmit = () => {
    console.log('clicked');
  };

  return (
    <UserSection>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            p: 4,
          }}>
          <Typography>Profile</Typography>
          <Text>
            Tell us about yourself so we can improve the financial advice we
            provide.
          </Text>

          <form onSubmit={onSubmit} sx={{ p: 2 }}>
            <Stack spacing={2}>
              <FormControl>
                <FormGroup>
                  <ValidationTextField
                    label='Enter Cash Balance'
                    required
                    value={cashBal}
                    // error={!cashBal}
                    onChange={e => setCashBal(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      ),
                    }}
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Enter Credit Score'
                    required
                    value={creditScore}
                    variant='standard'
                    color='secondary'
                    focused
                    // error={!creditScore}
                    onChange={e => setCreditScore(e.target.value)}
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Enter Target Budget'
                    required
                    value={budget}
                    variant='standard'
                    color='secondary'
                    focused
                    // error={!budget}
                    onChange={e => setBudget(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      ),
                    }}
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Enter Monthly Savings Goal'
                    required
                    value={goal}
                    // error={!goal}
                    onChange={e => setGoal(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      ),
                    }}
                    variant='standard'
                    color='secondary'
                    focused
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <StyledButton variant='contained' sx={{ px: 5, py: 1.5 }}>
                Submit Profile
              </StyledButton>
            </Stack>
          </form>
        </Box>
      </Box>
    </UserSection>
  );
}
