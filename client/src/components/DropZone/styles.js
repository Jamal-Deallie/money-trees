import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const DropSection = styled(Box)(({ theme }) => ({
  padding: '5.5rem 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: 'calc(8px + 1.5625vw)',
  },
}));

export const Image = styled('img')({
  width: '20rem',
});

export const UploadImage = styled('img')({
  height: '20rem',
  display: 'block',
});

export const DropContainer = styled(Container)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  borderWidth: '2px',
  borderStyle: 'dashed',
  backgroundColor: 'none',
  color: '#bdbdbd',
  outline: 'none',
  width: '35rem',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const Text = styled('p')(({ theme }) => ({
  fontFamily: 'open-sans, sans-serif',
  fontSize: '1.4rem',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: '2.5rem',
}));
