import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material/';

export const CustomContainer = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
}));

export const AccountSection = styled(Grid)(({ theme }) => ({
  width: '100%',
  borderRight: `2px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
  },
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',


  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Underline = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'balboa, sans-serif',
  fontSize: '7.2rem',
  textTransform: 'uppercase',
  overflow: 'hidden',
  fontWeight: 300,
  [theme.breakpoints.down('sm')]: {
    fontSize: '4.8rem',
  },
}));

export const NameWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '2rem',
  width: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
