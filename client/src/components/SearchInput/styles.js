import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  InputBase,
} from '@mui/material';
import { InputUnstyled } from '@mui/base';

export const SearchBarSection = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
  height: '25rem',
  borderBottom: `2px solid ${theme.palette.primary.main}`,
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
  padding: '0 10rem',
  height: 'auto',
}));

export const CloseSearchBtn = styled('button')(({ theme }) => ({
  height: '2.5rem',
  width: '2.5rem',
  borderRadius: '50%',
  border: `solid 1px ${theme.palette.primary.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 20,
  right: 20,
}));

export const SubmitBtn = styled('button')(({ theme }) => ({
  display: 'none',
}));
