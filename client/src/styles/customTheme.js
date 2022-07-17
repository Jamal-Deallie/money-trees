import { createTheme } from '@mui/material/styles';

const primaryColor = '#FCF4EC';

const secondaryDark = '#26323';
const secondaryColor = '#253232';
const secondaryLight = '#463a46';

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
      light: secondaryLight,
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
    header1: {
      fontWeight: 400,
      fontFamily: 'balboa, sans-serif',
      textTransform: 'uppercase',
      fontSize: '2.4rem',
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
    body3: {
      fontSize: '1.8rem',
      fontFamily: 'open-sans, sans-serif',
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'main' },
          style: {
            fontFamily: 'open-sans, sans-serif',
            color: primaryColor,
            background: successColor,
            border: `2px solid ${primaryColor}`,
            letterSpacing: '0.025rem',
            fontSize: '1.6rem',
            fontWeight: 300,
            padding: '1rem 4rem',
            borderRadius: '3px',
            boxSizing: 'border-box',
            height: '5rem',
            width: '100%',
            textTransform: 'capitalize',
            transition: 'color border background 0.2s ease-in-out',
            '&:hover': {
              background: 'none',
              color: successColor,
              border: `2px solid ${successColor}`,
            },
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});
