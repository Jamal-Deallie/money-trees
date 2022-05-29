import {
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  AppBar,
  IconButton,
  Toolbar,
} from '@mui/material/';
import { Image, CustomContainer } from './styles';
import { TransactionsContainer, AccountContainer } from '../../containers';

export default function DashboardContainer() {
  return (
    <CustomContainer sx={{ width: '100%' }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={9}>
            <Stack spacing={3}>
              <Grid container spacing={2}>
                <Grid item lg={3}>
                  <Card sx={{ minWidth: 275, background: '#E35C2C' }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item s={6}>
                          <Typography
                            variant='h3'
                            component='div'
                            sx={{ fontFamily: 'balboa, sans-serif' }}>
                            CREDIT CARD
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            $500
                          </Typography>
                        </Grid>
                        <Grid item s={6}>
                          <Image
                            src='/images/creditscore.svg'
                            alt='credit score'
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card sx={{ minWidth: 275, background: '#F4BF34' }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item s={6}>
                          <Typography variant='h5' component='div'>
                            Monthly Savings
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            $500
                          </Typography>
                        </Grid>
                        <Grid item s={6}>
                          <Image src='/images/savings.svg' alt='cash' />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card sx={{ minWidth: 275, background: '#2E8AC3' }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item s={6}>
                          <Typography variant='h5' component='div'>
                            Monthly Savings
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            $500
                          </Typography>
                        </Grid>
                        <Grid item s={6}>
                          <Image src='/images/budget.svg' alt='cash' />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card sx={{ minWidth: 275, background: '#46AC4C' }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item s={6}>
                          <Typography
                            component='div'
                            sx={{ fontFamily: 'open-sans, sans-serif' }}>
                            Monthly Savings
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            $500
                          </Typography>
                        </Grid>
                        <Grid item s={6}>
                          <Image src='/images/cash.svg' alt='cash' />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <TransactionsContainer />
            </Stack>
          </Grid>
          <Grid item lg={3}>
            <Box sx={{ height: 820 }}>
              <AccountContainer />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
}
