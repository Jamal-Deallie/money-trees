import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

export const CardSection = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const GridContainer = styled(Grid)({
  maxWidth: '120rem',
  width: '100%',
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
