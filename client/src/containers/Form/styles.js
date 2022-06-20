import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';

export const TabContainer = styled(Box)({
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
});

export const CustomTab = styled(Tab)(({ theme }) => ({
  '&.MuiButtonBase-root.MuiTab-root': {
    fontFamily: 'open-sans, sans-serif',
    fontSize: '1.4rem',
    color: theme.palette.primary.main,
  },
}));
