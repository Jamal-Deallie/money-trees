import { Box } from '@mui/material';
import { SignIn } from '../../components';

export default function SignUpContainer() {
  return (
    <Box
      sx={{ width: '100%', height: '100%', backgroundColor: 'secondary.main' }}>
      <SignIn />
    </Box>
  );
}
