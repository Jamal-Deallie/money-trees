import { styled } from '@mui/system';

export const StyledLayout = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
`;
export const NavContainer = styled('div')`
  position: 'relative';
  flex: 1;
`;

export const ContentContainer = styled('main')({
  flexGrow: 2,
  minHeight: '60rem',
  position: 'relative',
});

export const FooterContainer = styled('div')`
  position: 'relative';
  flex: 1;
  height: 40rem;
`;

