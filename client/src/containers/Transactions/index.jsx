import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { AccordionHeader } from './styles';

export default function TransactionsContainer() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: '#263232' }}>
      <Box>
        <Typography sx={{ color: 'white' }}>Transaction Testing</Typography>
        <Typography sx={{ color: 'white' }}>Price</Typography>
      </Box>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </Box>
    </Box>
  );
}
