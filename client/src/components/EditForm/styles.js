import { styled } from '@mui/system';
import ButtonUnstyled from "@mui/base/ButtonUnstyled";



export const SubmitButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: '2px solid #111',
  borderRadius: '3px',
  boxSizing: 'border-box',
 
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));


export const EditSection = styled('div')({
  width: '100%',
  padding: '5px',
});

export const Text = styled('p')({
  padding: '20px',
  width: '350px',
});