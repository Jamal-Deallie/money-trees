import { styled } from '@mui/system';

export const StyledLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const NavContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  background: theme.palette.primary.main,
  height: '9rem',
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
}));

export const ContentContainer = styled('main')({
  position: 'relative',
  flexGrow: 2,
});

export const FooterContainer = styled('footer')({
  width: '100%',
  height: '60rem',
});
