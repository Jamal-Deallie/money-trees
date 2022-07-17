import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material/';

export const CustomContainer = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
}));

export const AccountSection = styled(Grid)(({ theme }) => ({
  borderRight: `2px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
  },
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

export const GridItem = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
});

export const Underline = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'balboa, sans-serif',
  fontSize: 72,
  textTransform: 'uppercase',
  overflow: 'hidden',
  fontWeight: 300,
}));

export const NameWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
});
