import { Box, Typography } from '@mui/material';
import { FormContainer } from '../../containers';
import { Image } from './styles';

export default function AccountContainer() {
  return (
    <Box sx={{ paddingTop: '5rem' }}>
      <Image
        src='/images/placeholder.png'
        alt='placeholder'
        sx={{
          height: 200,
          width: 200,
          borderRadius: '50%',
          boxShadow: '#422800 4px 4px 0 0',
          border: '2px solid #422800',
          display: 'block',
          margin: '0 auto',
        }}
      />
      {/* <Typography>Name</Typography> */}
      <FormContainer />
    </Box>
  );
}
