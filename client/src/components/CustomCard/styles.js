import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material/';

export const AccountSection = styled(Grid)(({ theme }) => ({
  borderRight: '2px solid #422800',
}));

export const Header = styled('h1')(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  fontSize: '3rem',
  lineHeight: 1.5,
  fontWeight: 500,
  color: theme.palette.secondary.main,
}));

export const Stat = styled('h1')(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  fontSize: '4.5rem',
  color: theme.palette.secondary.main,
  fontWeight: 500,
}));

export const StyledCard = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'url(images/mesh.png)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

export const Span = styled('span')(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  fontSize: '4.5rem',
  color: theme.palette.secondary.main,
  fontWeight: 500,
}));

export const StatWrap = styled(Box)({
  display: 'flex',
});
