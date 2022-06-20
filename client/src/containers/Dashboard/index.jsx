import { useEffect } from 'react';
import { Box } from '@mui/material/';
import {
  CustomContainer,
  GridItem,
  AccountSection,
  GridContainer,
  Underline,
  NameWrapper,
} from './styles';
import {
  TransactionsContainer,
  AccountContainer,
  CardContainer,
} from '../../containers';
import { useGetMeQuery, selectMe } from '../../features/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { extendedApiSlice, selectName } from '../../features/users/usersSlice';
export default function DashboardContainer() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { firstName } = user;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(extendedApiSlice.endpoints.getMe.initiate());
  });

  const name = useSelector(selectName);


  return (
    <CustomContainer>
      <Box sx={{ width: '100%' }}>
        <GridContainer container>
          <AccountSection item s={6} md={6} lg={5}>
            <AccountContainer />
          </AccountSection>
          <GridItem item s={6} md={6} lg={7}>
            <NameWrapper sx={{ py: 7.5, paddingLeft: 5, overflow: 'hidden' }}>
              <Box
                sx={{
                  overflow: 'hidden',
                }}>
                <Underline> Hello {name && name}</Underline>
              </Box>
            </NameWrapper>
            <CardContainer />
            <TransactionsContainer />
          </GridItem>
        </GridContainer>
      </Box>
    </CustomContainer>
  );
}
