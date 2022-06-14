import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material/';
import { Navigation, Footer } from '../../components';
import {
  StyledLayout,
  ContentContainer,
  NavContainer,
  FooterContainer,
} from './styles';

export default function Layout() {
  return (
    <StyledLayout>
      <NavContainer>
        <Navigation />
      </NavContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </StyledLayout>
  );
}
