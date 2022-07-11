import React, { useState, useCallback, useEffect } from 'react';
import { SubmitButton, UpdateSection, CustomInput } from './styles';
import { Box, Stack, Typography } from '@mui/material';
import { useUpdateMeMutation } from '../../features/users/usersSlice';
import { setUser, selectUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';



export default function UpdateForm() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [updateMe, { data, isSuccess, isLoading }] = useUpdateMeMutation();
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
  }, [isSuccess]);

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
            p: 4,
            color: 'primary.main',
          }}>
          {error && <Typography>{error}</Typography>}

          <Box sx={{ p: 2 }}>
            <Stack spacing={4}>
              <CustomInput
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

              <SubmitButton
                variant='contained'
                onClick={handleSubmit}
                sx={{ px: 5, py: 1.5 }}>
                Submit
              </SubmitButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </UpdateSection>
  );
}
