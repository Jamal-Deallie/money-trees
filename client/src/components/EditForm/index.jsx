import React, { useState, useCallback } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { StyledButton, EditSection } from './styles';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import { todaysDate } from '../../helpers/todaysDate';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { useAddTransactionMutation } from '../../features/transactions/transactionSlice';

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

export default function EditForm({ transaction }) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState();

  const [state, setState] = useState({
    merchant: transaction.merchant,
    category: transaction.category,
    amount: transaction.amount,
    cashFlow: transaction.cashFlow,
    date: transaction.date,
  });

  console.log('### Refreshing');
  // const dispatch = useDispatch();

  const handleChange = useCallback(
    type => event => {
      setState({ ...state, [type]: event.target.value });
    },
    [state]
  );
  const [addTransaction, { isLoading }] = useAddTransactionMutation();

  const handleSubmit = async () => {
    try {
      await addTransaction({ ...state });
    } catch (err) {
      console.error('Failed to save the add transaction', err);
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
          }}>
          <Typography>Enter a Transaction</Typography>
          <form sx={{ p: 2 }}>
            <Stack spacing={2}>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <TextField
                    label='Enter Amount'
                    required
                    value={state.amount}
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
                    label='Enter Merchant'
                    required
                    value={state.merchant}
                    // error={!transactionData.merchant}
                    onChange={handleChange('merchant')}
                  />
                </FormGroup>
                <FormHelperText>{helperText}</FormHelperText>
              </FormControl>
              <FormControl>
                <FormGroup sx={{ width: '350px' }}>
                  <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    value={state.category}
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
                  value={state.cashFlow}
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
                  defaultValue={state.date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange('date')}
                />
              </FormControl>

              <StyledButton
                type='button'
                onClick={handleSubmit}
                variant='contained'
                sx={{ px: 5, py: 1.5 }}>
                Enter Transaction
              </StyledButton>
            </Stack>
          </form>
        </Box>
      </Box>
    </EditSection>
  );
}
