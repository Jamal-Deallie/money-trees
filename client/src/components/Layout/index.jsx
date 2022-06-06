import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material/';
import { Navigation, Footer } from '../../components';
import {
  StyledLayout,
  ContentContainer,
  NavContainer,
  FooterContainer,
  Main,
} from './styles';

export default function Layout({ children }) {
  return (
    <Box sx={{ background: '#FCF4EC' }}>
      <NavContainer>
        <Navigation />
      </NavContainer>
      <ContentContainer><Outlet/></ContentContainer>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </Box>
  );
}
