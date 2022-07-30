import { useCallback } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { Accordion } from '../../components';
import { useGetTransactionsBySearchQuery } from '../../features/transactions/transactionSlice';

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
              justifyContent: 'center',
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
  }, [isLoading, isSuccess, isError, data.transactions]);

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
