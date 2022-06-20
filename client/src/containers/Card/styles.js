import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const CardSection = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '2rem',
});

export const GridContainer = styled(Grid)({
  maxWidth: '120rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: 'auto 1 / 1',
  padding: '1rem',

}));
