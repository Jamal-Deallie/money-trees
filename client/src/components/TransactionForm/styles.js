import { styled } from '@mui/system';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

export const StyledButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: '2px solid #111',
  borderRadius: '8px',
  boxSizing: 'border-box',
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,
  marginTop: '5rem',
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));
export const TransactionSection = styled('div')({
  width: '100%',
  padding: '5px',
});

export const Text = styled('p')({
  padding: '20px',
  width: '350px',
});

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
  height: '5rem',
  width: '90%',
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));

export const ButtonWrap = styled('div')({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10rem',
});

export const ButtonLines = styled('div')({
  position: 'absolute',

  top: -20,
  right: 0,
});

export const Lines = styled('div')({
  width: '6rem',
  height: '6rem',
  backgroundImage: 'url(images/hero-lines.svg)',
  backgroundPosition: '50% 50%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});
