import { useCallback, useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Accordion } from '../../components';
import {
  useGetTransactionsQuery,
  selectAllTransactions,
} from '../../features/transactions/transactionSlice';

import { useSelector } from 'react-redux';
;

export default function TransactionsListContainer() {
  const { isLoading, isSuccess, isError } = useGetTransactionsQuery();

  const loadedTransactions = useSelector(selectAllTransactions);

  const user = JSON.parse(localStorage.getItem('user'));


  const renderedTransaction = useCallback(() => {
    if (isLoading) {
      return (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      );
    } else if (isSuccess) {
      return loadedTransactions?.map(transaction => {
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
      return <Typography>An Error has occured</Typography>;
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
