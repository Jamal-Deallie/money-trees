import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

export const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const LandingSection = styled('section')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
});

export const LandingWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '9.5rem calc(8px + 2vw)',
  height: '100%',
  gap: '2.5rem',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '0 calc(8px + 1.5vw) 5.5rem  calc(8px + 1.5vw)',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const MainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.secondary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '8px',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  fontSize: 'clamp(4.50rem, calc(2.64rem + 9.32vw), 8rem)',
  fontWeight: 'bold',
  lineHeight: 1.2,
  marginTop: '10rem',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    fontSize: '6.4rem',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    marginTop: '5.5rem',
  },
}));

export const GridImage = styled(Grid)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.success.main,
}));

export const Underline = styled('span')(({ theme }) => ({
  color: theme.palette.success.main,
}));

export const GridItem = styled(Grid)(({ theme }) => ({}));
