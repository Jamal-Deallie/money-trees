import { Box } from '@mui/material';
import { FormContainer } from '../../containers';
import { Image } from './styles';

export default function AccountContainer() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { avatar } = user;
  return (
    <Box sx={{ paddingTop: '5rem' }}>
      <Image src={avatar.secure_url} alt='placeholder' />
      <FormContainer />
    </Box>
  );
}
