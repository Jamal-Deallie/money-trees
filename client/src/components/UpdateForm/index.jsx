import React, { useState, useCallback, useEffect } from 'react';
import { UpdateSection, CustomInput } from './styles';
import { Box, Stack, Typography, Button } from '@mui/material';
import { useUpdateMeMutation } from '../../features/users/usersSlice';
import { setUser, selectUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateForm() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [updateMe, { data, isSuccess }] = useUpdateMeMutation();
  const { creditScore, email, firstName, lastName } = userInfo || {};
  const [updateData, setUpdateData] = useState({
    creditScore: creditScore,
    email: email,
    firstName: firstName,
    lastName: lastName,
  });

  const handleChange = useCallback(
    type => event => {
      setUpdateData({ ...updateData, [type]: event.target.value });
    },
    [updateData]
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setUser({
          user: {
            creditScore: data.updatedUser.creditScore,
            email: data.updatedUser.email,
            firstName: data.updatedUser.firstName,
            lastName: data.updatedUser.lastName,
            avatar: data.updatedUser.avatar,
          },
        })
      );
    }
  }, [isSuccess, dispatch]);

  const handleSubmit = async () => {
    try {
      await updateMe({ ...updateData }).unwrap();
    } catch (err) {
      setError('Failed to update your profile');
    }
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
            color: 'primary.main',
            width: '100%',
          }}>
          <Box sx={{ textAlign: 'center' }}>
            {error && (
              <Typography variant='body1' color='primary'>
                {error}
              </Typography>
            )}
          </Box>

          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
            method='POST'>
            <Stack spacing={4} sx={{ width: '100%' }}>
              <CustomInput
                fullWidth
                label='First Name'
                value={updateData.firstName}
                type='text'
                name='firstName'
                onChange={handleChange('firstName')}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <CustomInput
                label='Last Name'
                value={updateData.lastName}
                fullWidth
                type='text'
                name='lastName'
                onChange={handleChange('lastName')}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <CustomInput
                label='Email'
                value={updateData.email}
                fullWidth
                type='email'
                name='email'
                onChange={handleChange('email')}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <CustomInput
                label='Credit Score'
                value={updateData.creditScore}
                fullWidth
                type='number'
                name='creditScore'
                onChange={handleChange('creditScore')}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Button
                type='submit'
                fullWidth
                variant='main'
                sx={{ mt: 5.5, mb: 2 }}>
                Submit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </UpdateSection>
  );
}
