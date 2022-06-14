import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

export const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
});

export const ImageWrap = styled('div')({});

export const LandingSection = styled('section')({
  width: '100%',
});

export const LandingWrap = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '4rem',
  height: '100%',
  gap: '2.5rem',
});

export const MainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: '2px solid #111',
  borderRadius: '8px',
  boxSizing: 'border-box',
  boxShadow: `${theme.palette.primary.main} 4px 4px 0 0`,
  '&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  },
}));

export const Heading = styled(Typography)({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  lineHeight: '100%',
  fontSize: 'clamp(4.50rem, calc(2.64rem + 9.32vw), 9.28rem)',
  fontWeight: 'bold',
  display: 'block',
});

export const GridContainer = styled('div')({
  display: 'flex',
});

export const GridImage = styled(Grid)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.success.main,
}));

export const Underline = styled('span')(({ theme }) => ({
  color: theme.palette.success.main,
  display: 'inline-block',
}));

export const FreeIcon = styled('img')({
  height: '7.5rem',
  '@keyframes spin': {
    from: {
      transform: ' translate3d(-50%, -50%, 0) rotate(0deg)',
    },
    to: {
      transform: 'translate3d(-50%, -50%, 0) rotate(360deg)',
    },
  },
  animation: 'spin 2s linear infinite',
});

export const IconWrap = styled(Box)({
  position: 'relative',
});

export const ContentContainer = styled(Box)({
  paddingLeft: 'calc(5rem  + 1.5625vw)',
  paddingTop: 'calc(5rem + 1.5625vw)',
});

export const SubTextContainer = styled(Box)({
  maxWidth: '55rem',
  overflow: 'hidden',
  position: 'relative',
  paddingLeft: 'calc(5rem  + 1.5625vw)',
  display: 'inline-block',
});

export const ButtonContainer = styled(Box)({
  display: 'flex',
  gap: 50,
  alignItems: 'center',
  marginTop: 50,
});
