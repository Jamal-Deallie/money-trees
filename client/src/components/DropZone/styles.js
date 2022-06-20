import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material';

export const DropSection = styled(Box)({
  marginTop: '5.5rem',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

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
}));

export const Text = styled('p')(({ theme }) => ({
  fontFamily: 'open-sans, sans-serif',
  fontSize: '1.4rem',
  color: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: '2.5rem',
}));

export const UploadButton = styled(Button)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.primary.main,
  fontSize: 16,
  fontFamily: 'open-sans,sans-serif',
  fontWeight: 400,
  padding: '1rem 4rem',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '3px',
  boxSizing: 'border-box',
  height: '5rem',
  width: '35rem',
  marginTop: '2.5rem',
  transition: 'color, backgroundColor, border .3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.success.main,
    border: `2px solid ${theme.palette.success.main}`,
  },
}));
