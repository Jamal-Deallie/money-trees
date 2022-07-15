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

export const AccordionMenu = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: 'auto',
  maxWidth: 800,
}));

export const TitleContainer = styled(Box, {
  shouldForwardProp: prop => prop !== '$bc',
})(({ $bc }) => ({
  height: '6rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  alignItems: 'center',
  borderColor: $bc === 'debit' ? '#F25116' : '#00ABBD',
  borderStyle: 'solid',
  borderWidth: '.1rem',
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
  boxShadow: 24,
  p: 4,
}));

export const ContentInner = styled(Box, {
  shouldForwardProp: prop => prop !== '$bc',
})(({ $bc, theme }) => ({
  padding: '2rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  borderColor: $bc === 'debit' ? '#F25116' : '#00ABBD',
  borderStyle: 'solid',
  borderWidth: '.1rem',
  background: $bc === 'debit' ? '#F25116' : '#00ABBD',
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
