import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';


export const Wrapper = styled(Box)`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const UpdateSection = styled('section')({
  width: '100%',
  padding: '5px',
});

export const Text = styled('p')({
  padding: '20px',
  width: '350px',
});

export const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 2,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important', // override inline-style
  },
});

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
