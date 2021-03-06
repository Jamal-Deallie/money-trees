import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

export const CustomFooter = styled('footer')(({ theme }) => ({
  background: theme.palette.secondary.main,
  padding: '5rem',
  height: '100%',
  borderTop: `1px solid ${theme.palette.primary.main}`,
  display: 'flex',
}));

export const Icons = styled('img')({
  height: '3rem',
});

export const Links = styled(NavLink)(({ theme }) => ({
  fontFamily: '"open-sans", sans-serif"',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

export const GridLinks = styled(Grid)(({ theme }) => ({
  display: 'inline-flex',
  gap: 10,
  color: theme.palette.primary.main,
}));

export const CopyrightWrap = styled(Box)({
  display: 'inline-flex',
  gap: 10,
});
