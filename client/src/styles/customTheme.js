import { createTheme } from '@mui/material/styles';

const secondaryDark = '#26323';
const secondaryColor = '#253232';

const primaryColor = '#FCF4EC';

const warningColor = '#DC756C';
const successColor = '#56C090';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
      dark: secondaryDark,
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
      fontSize: '5.4rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: 'open-sans, sans-serif',
      color: '#FCF4EC',
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
