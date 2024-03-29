import { styled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';

export const Header = styled('h1')(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  fontSize: '5.4rem',
  lineHeight: 1.167,
  color: theme.palette.primary.main,
  margin: 0,
  fontWeight: 300,
  [theme.breakpoints.down('md')]: {
    fontSize: '3.2rem',
  },
}));

export const SearchBarSection = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.secondary.main,
  padding: '5rem 0',
  display: 'flex',
  alignItems: 'center',
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  marginLeft: 0,
  width: '100%',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    backgroundColor: 'transparent',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
  },
}));

export const FormWrapper = styled('div')(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  padding: '0 calc(8px + 1.5625vw)',
  height: 'auto',
}));

export const SubmitBtn = styled('button')(({ theme }) => ({
  display: 'none',
}));

export const TransactionSection = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.primary.main}`,
  maxHeight: '60rem',
  width: '100%',
  overflow: 'auto',
  paddingBottom: '2.5rem',
  padding: 'calc(8px + 1.5625vw)',
}));

export const TransactionInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxHeight: '60rem',
}));
