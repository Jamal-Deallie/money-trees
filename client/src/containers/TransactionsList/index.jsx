import { useCallback, useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Accordion } from '../../components';
import {
  useGetTransactionsQuery,
  selectAllTransactions,
} from '../../features/transactions/transactionSlice';
import { useSelector } from 'react-redux';

export default function TransactionsListContainer({ term }) {
  const { isLoading, isSuccess, isError, error } = useGetTransactionsQuery();
  const loadedTransactions = useSelector(selectAllTransactions);
  const [transactionData, setTransactionData] = useState(loadedTransactions);

  useEffect(() => {
    setTransactionData(loadedTransactions);
  }, [loadedTransactions]);

  console.log(loadedTransactions);

  const searchedTransactions = () =>
    term
      ? transactionData.filter(transaction => {
          return (
            transaction.party.toLowerCase().includes(term?.toLowerCase()) ||
            transaction.cashFlow.toLowerCase().includes(term?.toLowerCase())
          );
        })
      : transactionData;

  console.log({ search: searchedTransactions() });

  const renderedTransaction = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      return transactionData?.map(transaction => {
        const { party, _id, amount, date, cashFlow } = transaction;
        return (
          <Box
            key={_id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}>
            <Accordion
              party={party}
              id={_id}
              amount={amount}
              date={date}
              cashFlow={cashFlow}
            />
          </Box>
        );
      });
    } else if (isError) {
      return <Typography>{error}</Typography>;
    }
  }, [isLoading, isSuccess, isError, error, transactionData]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2.5,
        }}>
        {renderedTransaction()}
      </Box>
    </Box>
  );
}
