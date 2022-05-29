import { createTheme } from '@mui/material/styles';

const primaryDark = '#131919';
const primaryColor = '#253232';

const secondaryColor = '#A68764';
const secondaryLight = '#E6E1DD';

const warningColor = '#d14334';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDark,
    },
    secondary: {
      light: secondaryLight,
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
  },
  typography: {
    fontFamily: ["'balboa, sans-serif', 'open-sans, sans-serif'"].join(','),
    h1: {
      fontFamily: 'Open Sans',
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: 'Open Sans',
    },
  },
  components: {
    MuiButton: {
      fontSize: '1.6rem',
      fontFamily: ['Open Sans'],
    },
  },
});
