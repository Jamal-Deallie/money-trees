import { Typography, Box, Container } from '@mui/material/';
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

export default function DashboardContainer() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { firstName } = user;

  return (
    <CustomContainer sx={{ width: '100%', backgroundColor: 'secondary.main' }}>
      <Box sx={{ width: '100%' }}>
        <GridContainer container>
          <AccountSection item s={6} md={5} lg={4}>
            <AccountContainer />
          </AccountSection>
          <GridItem item s={6} md={7} lg={8}>
            <NameWrapper>
              <Box sx={{ py: 7.5, paddingLeft: 5 }}>
                <Underline> Hello {firstName}</Underline>
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
