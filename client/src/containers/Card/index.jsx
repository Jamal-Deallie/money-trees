import { useMemo } from 'react';
import { CustomCard } from '../../components';
import { CardSection, GridContainer, GridItem } from './styles';
import {
  selectTotalCreditAmount,
  selectTotalDebitAmount,
} from '../../features/transactions/transactionSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';

export default function CardContainer() {
  const income = useSelector(selectTotalCreditAmount);
  const expenses = useSelector(selectTotalDebitAmount);
  const cash = useMemo(() => income - expenses, [income, expenses]);
  const user = useSelector(selectUser);
  const { creditScore } = user || {};
  return (
    <CardSection>
      <GridContainer
        container
        // rowSpacing={{ xs: 1, xl: 2 }}
        // columnSpacing={{ xs: 1, xl: 2 }}
        
        
        >
        <GridItem item xs={12} md={4} lg={2} xl={2.5}>
          <CustomCard
            image='creditScore'
            category='Credit Score'
            stat={creditScore}
          />
        </GridItem>
        <GridItem item xs={12} md={4} lg={2} xl={2.5}>
          <CustomCard
            image='expenses'
            category='Expenses'
            stat={`${expenses}`}
          />
        </GridItem>
        <GridItem item xs={12} md={4} lg={2} xl={2.5}>
          <CustomCard image='income' category='Income' stat={`${income}`} />
        </GridItem>
        <GridItem item xs={12} md={4} lg={2} xl={2.5}>
          <CustomCard image='savings' category='Savings' stat={`${cash}`} />
        </GridItem>
      </GridContainer>
    </CardSection>
  );
}
