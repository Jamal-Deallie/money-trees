import React, { useState, useCallback } from 'react';
import { todaysDate } from '../../helpers/todaysDate';
import { useAddTransactionMutation } from '../../features/transactions/transactionSlice';
import {
  SubmitButton,
  ButtonWrap,
  CustomItem,
  CustomSelect,
  TransactionSection,
  CustomInput,
  CustomRadio,
  SelectWrapper,
} from './styles';
import {
  RadioGroup,
  Box,
  Stack,
  FormGroup,
  FormControl,
  TextField,
  InputLabel,
  Select,
  Typography,
  InputAdornment,
  FormControlLabel,
  FormLabel,
  MenuItem,
} from '@mui/material';
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

export default function TransactionForm() {
  const [transactionData, setTransactionData] = useState(initialValues);
  const [error, setError] = useState(false);

  console.log('### Refreshing');
  // const dispatch = useDispatch();

  const handleChange = useCallback(
    type => event => {
      setTransactionData({ ...transactionData, [type]: event.target.value });
    },
    [transactionData]
  );
  const [addTransaction, { isLoading, isSuccess }] = useAddTransactionMutation();
  const canSave =
    [
      transactionData.party,
      transactionData.category,
      transactionData.amount,
      transactionData.cashFlow,
      transactionData.date,
    ].every(Boolean) && !isLoading;

    if(isSuccess) {

      console.log('Success')
    }


  const handleSubmit = async () => {
    if (canSave) {
      try {
        await addTransaction({ ...transactionData });
      } catch (err) {
        setError('Failed to save the add transaction');
      }
    }
  };

console.log(transactionData)
  return (
    <TransactionSection>
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
          <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
            <Stack spacing={4}>
              <CustomInput
                label='Enter Amount'
                type='number'
                value={transactionData.amount}
                onChange={handleChange('amount')}
                inputProps={{
                  autoComplete: 'off',
                }}
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
                value={transactionData.party}
                onChange={handleChange('party')}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  autoComplete: 'off',
                }}
              />

              <SelectWrapper>
                <InputLabel id='demo-simple-select-label'>
                  Select Category
                </InputLabel>
                <CustomSelect
                  labelId='demo-simple-select-label'
                  label='Select Category'
                  value={transactionData.category}
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
                  value={transactionData.cashFlow}
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
                defaultValue={transactionData.date}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange('date')}
              />

              <SubmitButton
                variant='contained'
                type='submit'
                sx={{ px: 5, py: 1.5 }}>
                Enter Transaction
              </SubmitButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </TransactionSection>
  );
}
