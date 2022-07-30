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
import { useDispatch, useSelector } from 'react-redux';
import { extendedApiSlice } from '../../features/users/usersSlice';
import { selectUser } from '../../features/auth/authSlice';
export default function DashboardContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(extendedApiSlice.endpoints.getMe.initiate());
  });
  const userInfo = useSelector(selectUser);
  const { firstName } = userInfo || {};

  return (
    <CustomContainer>
      <GridContainer container>
        <AccountSection item s={6} md={6} lg={4}>
          <AccountContainer />
        </AccountSection>
        <GridItem item s={6} md={6} lg={8}>
          <NameWrapper>
            <Box
              sx={{
                overflow: 'hidden',
              }}>
              <Underline> Hello {firstName && firstName}</Underline>
            </Box>
          </NameWrapper>
          <CardContainer />
          <TransactionsContainer />
        </GridItem>
      </GridContainer>
    </CustomContainer>
  );
}
