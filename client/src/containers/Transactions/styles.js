import { styled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';
import { InputUnstyled } from '@mui/base';

export const Header = styled('h1')(({ theme }) => ({
  fontFamily: 'balboa, sans-serif',
  textTransform: 'uppercase',
  fontSize: '5.4rem',
  lineHeight: 1.167,
  color: theme.palette.primary.main,
  margin: 0,
  fontWeight: 300,
}));

export const SearchBarSection = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.secondary.main,
  padding: '5rem 0',
  display: 'flex',
  alignItems: 'center',

}));

export const SearchInput = styled('div')(({ theme }) => ({}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  borderBottom: `1px solid ${theme.palette.secondary.light}`,
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
  color: theme.palette.secondary.light,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    backgroundColor: 'transparent',
    fontSize: '1.6rem',
    textTransform: 'uppercase',
  },
}));

export const Heading = styled('div')(({ theme }) => ({
  fontFamily: 'Mightype',
  fontSize: '4.5rem',
  color: theme.palette.secondary.main,
  paddingBottom: '2.5rem',
}));

export const Form = styled('form')(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  height: 'auto',
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
  padding: 'calc(8px + 1.5625vw) calc(8px + 1.5625vw)',
  maxHeight: '60rem',
  width: '100%',
}));
