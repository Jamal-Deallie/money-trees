import { Box, Typography } from '@mui/material';
import { FormContainer } from '../../containers';
import { Image } from './styles';

export default function AccountContainer() {
  return (
    <Box>
        <Image src="/images/placeholder.png" alt="placeholder"/>
        {/* <Typography>Name</Typography> */}
      <FormContainer />
    </Box>
  );
}
