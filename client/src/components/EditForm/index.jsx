import React, { useState, useCallback, useEffect } from 'react';

import { todaysDate } from '../../helpers/todaysDate';
import {
  RadioGroup,
  Box,
  Stack,
  InputLabel,
  Typography,
  InputAdornment,
  FormControlLabel,
  FormLabel,
  Button,
} from '@mui/material';
import { useSelector } from 'react-redux';

import {
  EditSection,
  CustomItem,
  CustomSelect,
  CustomInput,
  CustomRadio,
  SelectWrapper,
} from './styles';
import {
  useUpdateTransactionMutation,
  selectTransactionById,
} from '../../features/transactions/transactionSlice';

const categories = [
  {
    id: 1,
    transaction: 'Income',
    color: '#05595B',
    //green
  },
  {
    id: 2,
    transaction: 'Bills & Utilities',
    color: '#890F0D',
    //dark-red
  },
  {
    id: 3,
    transaction: 'Food & Dining',
    color: '#F2FA5A',
    //volt
  },
  {
    id: 4,
    transaction: 'Entertainment',
    color: '#4D77FF',
    //blue-purple mix
  },
  {
    id: 5,
    transaction: 'Health & Fitness',
    color: '#E2D784',
    //yellow
  },
  {
    id: 6,
    transaction: 'Personal Care',
    color: '#F68989',
    //dusty pink
  },
  {
    id: 7,
    transaction: 'Pets',
    color: '#F76E11',
    //burnt orange
  },
  {
    id: 8,
    transaction: 'Misc Expenses',
    color: '#8A39E1',
    //purple
  },
  {
    id: 9,
    transaction: 'Uncategorized',
    color: '#F5F5F5',
    //grey
  },
  {
    id: 10,
    transaction: 'Shopping',
    color: '#495371',
    //navy blue
  },
  {
    id: 11,
    transaction: 'Travel',
    color: '#FF5D9E',
    //pink
  },
];

const initialValues = {
  party: '',
  category: '',
  amount: '',
  cashFlow: '',
  date: todaysDate(),
};

export default function EditForm({ id }) {
  const [error, setError] = useState(false);
  const loadedTransaction = useSelector(state =>
    selectTransactionById(state, id)
  );
  const [editTransaction, setEditTransaction] = useState(initialValues);

  useEffect(() => {
    setEditTransaction({
      amount: loadedTransaction.amount,
      cashFlow: loadedTransaction.cashFlow,
      date: loadedTransaction.date,
      party: loadedTransaction.party,
      category: loadedTransaction.category,
      _id: id,
    });
  }, [loadedTransaction, id]);

  const handleChange = useCallback(
    type => event => {
      setEditTransaction({ ...editTransaction, [type]: event.target.value });
    },
    [editTransaction]
  );
  const [updateTransaction] = useUpdateTransactionMutation();

  const handleSubmit = async () => {
    try {
      await updateTransaction({ ...editTransaction });
    } catch (err) {
      setError('Failed to update the transaction');
    }
  };

  return (
    <EditSection>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            p: 4,
            color: 'primary.main',
          }}>
          {error && <Typography>{error}</Typography>}
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{ p: 2 }}
            method='POST'>
            <Stack spacing={4}>
              <CustomInput
                label='Enter Amount'
                type='number'
                value={editTransaction.amount}
                onChange={handleChange('amount')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position='start'
                      sx={{ color: 'primary.main' }}>
                      $
                    </InputAdornment>
                  ),
                }}
              />

              <CustomInput
                label='Enter The Transacting Party'
                required
                value={editTransaction.party}
                onChange={handleChange('party')}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <SelectWrapper>
                <InputLabel id='demo-simple-select-label'>
                  Select Category
                </InputLabel>
                <CustomSelect
                  labelId='demo-simple-select-label'
                  label='Select Category'
                  value={editTransaction.category}
                  onChange={handleChange('category')}>
                  {categories.map(cat => {
                    return (
                      <CustomItem value={cat.transaction} key={cat.id}>
                        {cat.transaction}
                      </CustomItem>
                    );
                  })}
                </CustomSelect>
              </SelectWrapper>

              <SelectWrapper component='fieldset'>
                <FormLabel id='cashFlows-radio'>Cash Flows</FormLabel>
                <RadioGroup
                  id='cashFlows-radio'
                  aria-label='cashFlows'
                  name='radio-buttons-group'
                  value={editTransaction.cashFlow}
                  // error={!transactionData.cashFlows}
                  onChange={handleChange('cashFlow')}
                  row>
                  <FormControlLabel
                    value='credit'
                    control={<CustomRadio />}
                    label='Credit'
                  />
                  <FormControlLabel
                    value='debit'
                    control={<CustomRadio />}
                    label='Debit'
                  />
                </RadioGroup>
              </SelectWrapper>

              <CustomInput
                id='date'
                label='Transaction Date'
                type='date'
                defaultValue={editTransaction.date}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange('date')}
              />

              <Button variant='main' type='submit' sx={{ px: 5, py: 1.5 }}>
                Enter Transaction
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </EditSection>
  );
}
