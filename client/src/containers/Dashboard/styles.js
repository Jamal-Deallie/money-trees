import { styled } from '@mui/system';
import { Paper, Card, Grid } from '@mui/material/';
export const Image = styled('img')({
  height: 100,
});

export const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const CustomContainer = styled('div')(({ theme }) => ({}));

export const CustomCard = styled('div')(({ theme }) => ({
  border: '2px solid #422800',
  borderRadius: '30px',
  boxShadow: '#422800 4px 4px 0 0',
  width: 200,
  height: 250,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '2rem',
}));

export const AccountSection = styled(Grid)(({ theme }) => ({
  borderRight: '2px solid #422800',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
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
