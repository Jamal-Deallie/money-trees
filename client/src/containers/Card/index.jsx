import { Divider, Typography, Box } from '@mui/material';
import { CustomCard } from '../../components';
import { CardSection, GridContainer, GridItem } from './styles';
import {
  selectTotalCreditAmount,
  selectTotalDebitAmount,
} from '../../features/transactions/transactionSlice';
import { useSelector } from 'react-redux';
export default function CardContainer() {
  const income = useSelector(selectTotalCreditAmount);
  const expenses = useSelector(selectTotalDebitAmount);
  const cash = income - expenses;
  console.log(expenses);

  const user = JSON.parse(localStorage.getItem('user'));
  const { creditScore } = user;

  return (
    <CardSection>
      <GridContainer container spacing={2}>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='#F29877'
            image='creditScore'
            category='Credit Score'
            stat={creditScore}
            bgImage={'url(images/card-1.svg)'}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='#84A9D9'
            image='expenses'
            category='Expenses'
            stat={`$${expenses}`}
            bgImage={'url(images/card-2.svg)'}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='#E0AEEB'
            image='income'
            category='Income'
            stat={`$${income}`}
            bgImage={'url(images/card-3.svg)'}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='#F2D091'
            image='savings'
            category='Savings'
            stat={`$${cash}`}
            bgImage={'url(images/card-4.svg)'}
          />
        </GridItem>
      </GridContainer>
    </CardSection>
  );
}
