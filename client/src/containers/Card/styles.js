import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const CardSection = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const GridContainer = styled(Grid)({
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.5rem 1rem 5rem 1rem',
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.down('xs')]: {
    paddingLeft: '5rem',
  },
}));
