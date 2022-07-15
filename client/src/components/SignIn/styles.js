import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, TextField, OutlinedInput } from '@mui/material';

export const LoginWrap = styled(Box)({
  width: '45rem',
  margin: '0 auto',
});

export const Links = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1.2rem',
  '&:hover': {
    color: theme.palette.secondary.main,
    fontWeight: 800,
  },
}));

export const FormWrap = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '30px',
  padding: '7rem 3rem',
  height: '100%',
  gap: '5rem',
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
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

export const OutlineInput = styled(OutlinedInput)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.primary.main}`,
    background: 'none',
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
