import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
export const NotFoundSection = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: '12.5rem 0',
  minHeight: 'calc(100vh - 20rem)',
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '15rem',
  textAlign: 'center',
}));


export const Container = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }));