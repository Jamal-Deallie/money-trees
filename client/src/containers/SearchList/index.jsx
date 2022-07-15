import { useCallback, useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Accordion } from '../../components';
import {
  useGetTransactionsQuery,
  selectAllTransactions,
  useGetTransactionsBySearchQuery,
  selectTransactionIds,
} from '../../features/transactions/transactionSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function TransactionsListContainer({ term }) {
  const { data, isLoading, isSuccess, isError } =
    useGetTransactionsBySearchQuery(term);


  const renderedTransaction = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      return data.transactions?.map(transaction => {
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
      return <Typography>An Error has occurred</Typography>;
    }
  }, [isLoading, isSuccess, isError]);

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
