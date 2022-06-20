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

  const user = JSON.parse(localStorage.getItem('user'));
  const { creditScore } = user;

  return (
    <CardSection>
      <GridContainer
        container
        rowSpacing={{ xs: 1, xl: 2 }}
        columnSpacing={{ xs: 1, xl: 2 }}>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='none'
            image='creditScore'
            category='Credit Score'
            stat={creditScore}
            bgImage={'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='#fe7bb0'
            image='expenses'
            category='Expenses'
            stat={`${expenses}`}
            bgImage={'linear-gradient(315deg, #fe7bb0 0%, #ff748b 74%)'}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='#7cffcb'
            image='income'
            category='Income'
            stat={`${income}`}
            bgImage={'linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)'}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={6} xl={3}>
          <CustomCard
            bgColor='none'
            image='savings'
            category='Savings'
            stat={`${cash}`}
            bgImage={'linear-gradient(to top, #a3bded 0%, #6991c7 100%)'}
          />
        </GridItem>
      </GridContainer>
    </CardSection>
  );
}
