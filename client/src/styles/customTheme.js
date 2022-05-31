import { createTheme } from '@mui/material/styles';

const primaryDark = '#26323';
const primaryColor = '#253232';

const secondaryColor = '#FCF4EC';

const warningColor = '#DC756C';
const successColor = '#59BDB6';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDark,
    },
    secondary: {
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
  },
  typography: {
    fontFamily: ["'balboa, sans-serif', 'open-sans, sans-serif'"].join(','),
    h1: {
      fontFamily: 'balboa, sans-serif',
      fontSize: 54,
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: 'open-sans, sans-serif',
    },
    body2: {
      fontSize: '1.8rem',
      fontFamily: 'open-sans, sans-serif',
    },
  },
  components: {
    MuiButton: {
      fontSize: '1.6rem',
      fontFamily: ['open-sans,sans-serif'],
    },
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
    },
  },
});
