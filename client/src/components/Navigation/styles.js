import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

export const Navbar = styled('nav')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  height: '9rem',
  alignItems: 'center',
  position: 'sticky',
  padding: ' 0 2.5rem',
}));

export const MainButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.success.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: `2px solid ${theme.palette.success.main}`,
  boxSizing: 'border-box',

  '&:hover': {
    backgroundColor: theme.palette.success.main,
    boxShadow: 'none',
    color: theme.palette.primary.main,
    border: 'none',
  },
}));

