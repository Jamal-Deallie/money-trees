import { Box } from '@mui/material';
import { FormContainer } from '../../containers';
import { Image } from './styles';
import { selectUser } from '../../features/auth/authSlice';
import { useSelector } from 'react-redux';

export default function AccountContainer() {
  const userInfo = useSelector(selectUser);
  const { avatar } = userInfo;

  return (
    <Box sx={{ paddingTop: '5rem' }}>
      <Image src={avatar} alt='placeholder' />
      <FormContainer />
    </Box>
  );
}
