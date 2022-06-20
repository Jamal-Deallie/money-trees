import { styled } from '@mui/system';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Radio, FormControl, TextField, Select, MenuItem } from '@mui/material';

export const SubmitButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '5rem',
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const CustomInput = styled(TextField)(({ theme }) => ({
  width: '350px',
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
}));

export const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
export const SelectWrapper = styled(FormControl)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
  '&& .MuiInputBase-formControl:hover': {
    '& > fieldset': { border: `1px solid ${theme.palette.primary.main}` },
  },
  '& .MuiInputBase-formControl': {
    color: theme.palette.primary.main,
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '& label': {
    color: theme.palette.secondary.main,
    fontFamily: 'open-sans, sans-serif',
    fontSize: 16,
    margin: 'dense',
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}));

export const CustomItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const EditSection = styled('div')({
  width: '100%',
  padding: '5px',
});

export const Text = styled('p')({
  padding: '20px',
  width: '350px',
});
