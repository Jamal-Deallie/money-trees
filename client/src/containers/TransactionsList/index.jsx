import { Box, Container } from '@mui/material';
import { Accordion } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectAllTransactions,
} from '../../features/transactions/transactionSlice';

export default function TransactionsListContainer() {
  const loadedTransactions = useSelector(selectAllTransactions);



  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        margin: '0 auto',
        width: '100%',
      }}>
      {loadedTransactions.map(transaction => {
        return (
          <Box
            key={transaction._id}
            sx={{
              margin: '0 auto',
              width: '100%',
              maxWidth: 800,
              minWidth: 400,
            }}>
            <Accordion transaction={{ ...transaction }} />
          </Box>
        );
      })}
    </Box>
  );
}
