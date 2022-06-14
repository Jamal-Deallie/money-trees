import { styled } from '@mui/system';
import { Box, Grid, Card, Typography } from '@mui/material/';


export const AccountSection = styled(Grid)(({ theme }) => ({
  borderRight: '2px solid #422800',
}));

export const Header = styled(Typography)(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  fontSize: '3rem',
  lineHeight: '5rem',
}));

export const Stat = styled(Typography)(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  fontSize: '4.5rem',
}));

export const StyledCard = styled(Box, {
  shouldForwardProp: prop => prop !== '$bg',
})(({ $bgImg, $bg }) => ({
  height: '27.5rem',
  width: '27.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: $bg ? $bg : 'none',
  backgroundImage: $bgImg ? $bgImg : 'none',
  backgroundPosition: 'cover',
  backgroundRepeat: 'no-repeat',
}));
