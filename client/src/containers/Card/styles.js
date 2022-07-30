import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const CardSection = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingBottom: '2.5rem',
  [theme.breakpoints.down('sm')]: { padding: 'calc(8px + 1.5625vw)' },
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
}));

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: ' auto 1 / 1',
  height: 'auto',
  width: '100%',
  maxWidth: '55rem',
  [theme.breakpoints.down('md')]: { maxWidth: '40rem' },
  [theme.breakpoints.down('sm')]: { maxWidth: '30rem' },
}));
