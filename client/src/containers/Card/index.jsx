import { Box, Container, Grid } from "@mui/material";
import { CustomCard } from "../../components";
import { CardSection, GridContainer, GridItem } from "./styles";
import {
  selectTotalCreditAmount,
  selectTotalDebitAmount,
} from "../../features/transactions/transactionSlice";
import { useSelector } from "react-redux";
export default function CardContainer() {
  const expenses = useSelector(selectTotalCreditAmount);
  const income = useSelector(selectTotalDebitAmount);
  const cash = income - expenses;
  console.log(expenses);
  const creditScore = JSON.parse(localStorage.getItem("creditScore"));

  return (
    <CardSection>
      <GridContainer container spacing={2}>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard
            bgColor="#F29877"
            image="creditScore"
            category="Credit Score"
            stat={creditScore}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard
            bgColor="#84A9D9"
            image="expenses"
            category="Expenses"
            stat={`$${expenses}`}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard
            bgColor="#E0AEEB"
            image="income"
            category="Income"
            stat={`$${income}`}
          />
        </GridItem>
        <GridItem item xs={12} md={6} lg={3}>
          <CustomCard
            bgColor="#F2D091"
            image="savings"
            category="Savings"
            stat={`$${cash}`}
          />
        </GridItem>
      </GridContainer>
    </CardSection>
  );
}
