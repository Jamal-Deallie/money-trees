import { Outlet } from 'react-router-dom';
import {
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  AppBar,
  IconButton,
  Toolbar,
} from '@mui/material/';
import { Navigation, Footer } from '../../components';
import {
  StyledLayout,
  ContentContainer,
  NavContainer,
  FooterContainer,
} from './styles';

export default function Layout({ children }) {
  return (
    <Box>
      <NavContainer>
        <Navigation />
      </NavContainer>
      <Box>{children}</Box>
    </Box>
  );
}
