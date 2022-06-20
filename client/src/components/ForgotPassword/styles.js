import { styled } from '@mui/system';
import { Button, Box, TextField, Typography } from '@mui/material';

export const MainButton = styled(Button)(({ theme }) => ({
  marginTop: '2.5rem',
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: '2px solid #111',
  borderRadius: '8px',
  boxSizing: 'border-box',
  width: '100%',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: theme.palette.secondary.main,
    boxShadow: 'none',
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
      background: 'none',
    },
  },
  '&& .MuiOutlinedInput-root:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '& label': {
    color: theme.palette.primary.main,
    fontFamily: 'open-sans, sans-serif',
    fontSize: 16,
    margin: 'dense',
  },

  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
  },

  '& .MuiInputBase-root': {
    color: theme.palette.primary.main,
  },

  ' & ::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%)',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: 'center',
  cursor: 'pointer',
}));

export const Form = styled(Box)({
  paddingTop: '5rem',
  maxWidth: '50rem',
  width: '100%',
  margin: '0 auto',
});

export const FormContainer = styled(Box)({
  margin: '0 auto',
  maxWidth: '50rem',
  width: '100%',
  padding: 'calc(8px + 1.5625vw)',
});

export const Subheader = styled(Typography)(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  paddingBottom: '5rem',
  textAlign: 'center',
}));
