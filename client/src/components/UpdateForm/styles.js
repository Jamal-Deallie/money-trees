import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

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

export const SubmitButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: '2px solid #111',
  borderRadius: '8px',
  boxSizing: 'border-box',
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));
