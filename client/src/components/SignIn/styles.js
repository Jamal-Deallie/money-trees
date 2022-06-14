import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';

export const LoginSection = styled('div')(({ theme }) => ({}));

export const LoginWrap = styled('div')({
  width: '45rem',
  margin: '0 auto',
});

export const MainButton = styled('button')(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1.5rem 4rem',
  border: '2px solid #111',
  borderRadius: '8px',
  boxSizing: 'border-box',
  width: '100%',
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,
  marginTop: '5rem',
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));


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
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,
  borderRadius: '30px',
  padding: '10rem 5rem',
  height: '100%',
  gap: '5rem',
  background: theme.palette.secondary.main
}));

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },
}));
