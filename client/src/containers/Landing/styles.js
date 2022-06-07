import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

export const Image = styled('img')({
  width: '100%',
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
  padding: '10rem',
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
  lineHeight: '9.5rem',
  fontSize: 90,
  fontWeight: 'bold',
  display: 'block',

});

export const GridItem = styled('div')({});

export const GridContainer = styled('div')({
  display: 'flex',
});

export const GridImage = styled(Grid)({
  display: 'flex',
});

export const ImageContainer = styled('div')({});

export const Underline = styled('span')(({ theme }) => ({
  backgroundPosition: '50% 100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(/images/underline_img.svg)',
  color: theme.palette.success.main,
}));
