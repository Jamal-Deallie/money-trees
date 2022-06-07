import { styled } from '@mui/system';

export const StyledLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const NavContainer = styled('div')({
  position: 'relative',
});

export const ContentContainer = styled('main')({
  position: 'relative',
});

export const FooterContainer = styled('footer')({
  width: '100%',
  height: '60rem',
});
