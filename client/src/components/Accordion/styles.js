import { styled } from '@mui/system';
import { ButtonGroup } from '@mui/material';

export const BtnGroup = styled(ButtonGroup, {
  shouldForwardProp: prop => prop !== '$options',
})(({ $options }) => ({
  transition: 'all 250ms ease-in-out',
  display: $options ? 'block' : 'none',
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
    $bg === 'credit' ? theme.palette.warning.main : theme.palette.success.main,
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
