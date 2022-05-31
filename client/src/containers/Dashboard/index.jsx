import { Grid, Box } from '@mui/material/';
import {
  CustomContainer,
  GridItem,
  AccountSection,
  GridContainer,
} from './styles';
import {
  TransactionsContainer,
  AccountContainer,
  CardContainer,
} from '../../containers';

export default function DashboardContainer() {
  return (
    <CustomContainer sx={{ width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <GridContainer container>
          <AccountSection item s={6} md={5} lg={4}>
            <AccountContainer />
          </AccountSection>
          <GridItem item s={6} md={7} lg={8}>
            <TransactionsContainer />
            <CardContainer />
          </GridItem>
        </GridContainer>
      </Box>
    </CustomContainer>
  );
}

{
  /* <Grid container spacing={2} sx={{ padding: 5 }}>
                <Grid item lg={3}>
                  <CustomCard sx={{ background: '#F29877' }}>
                    <Typography
                      variant='h3'
                      sx={{
                        fontFamily: 'balboa, sans-serif',
                        textTransform: 'uppercase',
                      }}>
                      CREDIT SCORE
                    </Typography>
                    <Typography color='text.secondary'>700</Typography>
                    <Image src='/images/creditscore.svg' alt='credit score' />
                  </CustomCard>
                </Grid>
                <Grid item lg={3}>
                  <CustomCard sx={{ background: '#F2D091' }}>
                    <Typography
                      variant='h3'
                      sx={{
                        fontFamily: 'balboa, sans-serif',
                        textTransform: 'uppercase',
                      }}>
                      Savings
                    </Typography>
                    <Typography color='text.secondary'>$500</Typography>

                    <Image src='/images/savings.svg' alt='cash' />
                  </CustomCard>
                </Grid>
                <Grid item lg={3}>
                  <CustomCard sx={{ background: '#84A9D9' }}>
                    <Typography
                      variant='h3'
                      sx={{
                        fontFamily: 'balboa, sans-serif',
                        textTransform: 'uppercase',
                      }}>
                      My Budget
                    </Typography>
                    <Typography color='text.secondary'>$500</Typography>

                    <Image src='/images/budget.svg' alt='cash' />
                  </CustomCard>
                </Grid>
                <Grid item lg={3}>
                  <CustomCard sx={{ background: '#E0AEEB' }}>
                    <Typography
                      variant='h3'
                      sx={{
                        fontFamily: 'balboa, sans-serif',
                        textTransform: 'uppercase',
                      }}>
                      Expenses
                    </Typography>
                    <Typography color='text.secondary' variant='body2'>
                      $500
                    </Typography>

                    <Image src='/images/cash.svg' alt='cash' />
                  </CustomCard>
                </Grid> */
}
