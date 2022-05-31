import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const Navbar = styled('nav')(({ theme }) => ({
  width: '100%',
  borderBottom: '2px solid #422800',
  display: 'flex',
  justifyContent: 'space-between',
  padding: ' 0 3rem',
  alignItems: 'center',
  position: 'relative',
}));

export const MainButton = styled(Button)(({ theme }) => ({
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

  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));
