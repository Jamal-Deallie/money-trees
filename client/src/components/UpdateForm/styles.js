import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export const UpdateSection = styled('section')({
  width: '100%',
});

export const CustomInput = styled(TextField)(({ theme }) => ({
  width: '35rem',
  '& .MuiOutlinedInput-root': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
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
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
