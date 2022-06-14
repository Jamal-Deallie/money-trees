import React, { useState, useCallback } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { TransactionSection } from './styles';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import { todaysDate } from '../../helpers/todaysDate';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAddTransactionMutation } from '../../features/transactions/transactionSlice';
import { SubmitButton, ButtonWrap, ButtonLines, Lines } from './styles';
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
  const [helperText, setHelperText] = useState();

  const [date, setDate] = useState(todaysDate());

  console.log('### Refreshing');
  // const dispatch = useDispatch();

  const handleChange = useCallback(
    type => event => {
      setTransactionData({ ...transactionData, [type]: event.target.value });
    },
    [transactionData]
  );
  const [addTransaction, { isLoading }] = useAddTransactionMutation();
  const canSave =
    [
      transactionData.party,
      transactionData.category,
      transactionData.amount,
      transactionData.cashFlow,
      transactionData.date,
    ].every(Boolean) && !isLoading;

  console.log(canSave);

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await addTransaction({ ...transactionData });
      } catch (err) {
        setError('Failed to save the add transaction');
      }
    }
  };

  console.log(transactionData);
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
          }}>
          {error && <Typography>{error}</Typography>}
          <form sx={{ p: 2 }}>
            <Stack spacing={2}>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Enter Amount'
                    required
                    value={transactionData.amount}
                    // error={!transactionData.amount}
                    onChange={handleChange('amount')}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>$</InputAdornment>
                      ),
                    }}
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Enter The Transacting Party'
                    required
                    value={transactionData.party}
                    // error={!transactionData.merchant}
                    onChange={handleChange('party')}
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    value={transactionData.category}
                    // error={!transactionData.category}
                    onChange={handleChange('category')}>
                    <MenuItem value=''>
                      <em>Select Category</em>
                    </MenuItem>
                    {categories.map(cat => {
                      console.log(cat);
                      return (
                        <MenuItem value={cat.transaction} key={cat.id}>
                          {cat.transaction}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>

              <FormControl error={error} component='fieldset'>
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
                    control={<Radio />}
                    label='Credit'
                  />
                  <FormControlLabel
                    value='debit'
                    control={<Radio />}
                    label='Debit'
                  />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl sx={{ width: '350px' }}>
                <TextField
                  id='date'
                  label='Transaction Date'
                  type='date'
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange('date')}
                />
              </FormControl>
              <ButtonWrap>
                <SubmitButton
                  type='button'
                  onClick={handleSubmit}
                  variant='contained'>
                  Enter Transaction
                </SubmitButton>
                <ButtonLines>
                  <Lines />
                </ButtonLines>
              </ButtonWrap>
            </Stack>
          </form>
        </Box>
      </Box>
    </TransactionSection>
  );
}
