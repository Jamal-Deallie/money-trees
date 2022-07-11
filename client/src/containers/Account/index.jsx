import { Box } from '@mui/material';
import { FormContainer } from '../../containers';
import { Image } from './styles';
import { setUser, selectUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function AccountContainer() {
  const userInfo = useSelector(selectUser);
  const { avatar } = userInfo;
  console.log(userInfo);
  console.log(avatar);

  return (
    <Box sx={{ paddingTop: '5rem' }}>
      <Image src={avatar} alt='placeholder' />
      <FormContainer />
    </Box>
  );
}
