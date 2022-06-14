import { styled } from '@mui/system';
import { ButtonGroup, Box } from '@mui/material';

export const BtnGroup = styled(Box, {
  shouldForwardProp: prop => prop !== '$options',
})(({ $options }) => ({
  transition: 'opacity 0.5s ease-in-out',
  opacity: $options ? 1 : 0,
  width: '10rem',
  display: 'flex',
  justifyContent: 'center',
  gap: 2
}));

export const AccordionMenu = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: 'auto',
  maxWidth: 800,
}));

export const AccordionTitle = styled('h2')(({ theme }) => ({}));
/* color: pink; */

export const AccordionContent = styled('p')(({ theme }) => ({
  color: 'orange',
  padding: '5rem',
  opacity: 0,
  overflow: 'hidden',
  fontSize: 'clamp(1.44rem, calc(1.05rem + 1.95vw), 2.44rem)',
  transform: 'translateY(-100%)',
}));

export const TitleContainer = styled('div', {
  shouldForwardProp: prop => prop !== '$bg',
})(({ theme, $bg }) => ({
  height: '6rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  border: '0.1rem solid white',
  alignItems: 'center',
  background:
    $bg === 'credit' ? theme.palette.success.main : theme.palette.warning.main,
}));

export const Icon = styled('img')({});
/* height: 2.5rem; */

export const AccordionWrapper = styled('div')(({ theme }) => ({
  border: '0.1rem solid pink',
  overflow: 'hidden',
}));

export const ContentContainer = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  height: 0,
}));

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.secondary.main,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}));
