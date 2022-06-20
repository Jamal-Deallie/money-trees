import { styled } from '@mui/system';

export const StyledLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const NavContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '9rem',
  background: theme.palette.secondary.main,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

export const ContentContainer = styled('main')({
  position: 'relative',
  flexGrow: 2,
  minHeight: 'calc(100vh - 20rem)',
});
