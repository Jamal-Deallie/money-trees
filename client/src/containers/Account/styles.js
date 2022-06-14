import { styled } from '@mui/system';
import { AccordionSummary } from '@mui/material';

export const Image = styled('img')(({ theme }) => ({
  height: 200,
  width: 200,
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'block',
  margin: '0 auto',
  outlineOffset: 'inherit',
}));

export const AccordionDetails = styled(AccordionSummary)({});
