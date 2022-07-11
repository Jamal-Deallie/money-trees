import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const StyledLayout = styled('div')({
  display: 'grid',
});

export const NavContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '9rem',
  background: theme.palette.secondary.main,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

export const ContentContainer = styled('main')({
  position: 'relative',
  minHeight: 'calc(100vh - 9rem',
});

export const FooterContainer = styled(Box)({});
