import { styled } from '@mui/system';
import { Tooltip, Box } from '@mui/material';

export const BtnGroup = styled(Box)({
  transition: 'opacity 0.5s ease-in-out',
  opacity: 1,
  width: '10rem',
  display: 'flex',
  justifyContent: 'center',
  gap: 2,
});

export const AccordionMenu = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: 'auto',
  maxWidth: 800,
}));

export const TitleContainer = styled('div', {
  shouldForwardProp: prop => prop !== '$bg',
})(({ theme, $bg }) => ({
  height: '6rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  border: `0.1rem solid ${theme.palette.primary.main}`,
  alignItems: 'center',
  backgroundColor: $bg === 'debit' ? '#F25116' : '#00ABBD',
}));

//

export const AccordionWrapper = styled(Box)({
  overflow: 'hidden',
});

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

export const ContentInner = styled(Box)(({ theme }) => ({
  padding: '2rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  border: `0.1rem solid ${theme.palette.primary.main}`,
  background: theme.palette.primary.main,
  color: theme.palette.secondary.light,
}));

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    padding: 5,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'open-sans, sans-serif',
  },
});
