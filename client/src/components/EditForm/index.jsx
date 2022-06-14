import React, { useState, useCallback, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SubmitButton, EditSection } from './styles';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import { todaysDate } from '../../helpers/todaysDate';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector } from 'react-redux';
import {
  useAddTransactionMutation,
  useGetTransactionByIdQuery,
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

export default function EditForm({ id }) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState();
  const loadedTransaction = useSelector(state =>
    selectTransactionById(state, id)
  );

  const { isLoading, isSuccess, isError } = useGetTransactionByIdQuery(id);
  const [state, setState] = useState({
    party: '',
    category: '',
    amount: '',
    cashFlow: '',
    date: '',
  });

  useEffect(() => {
    setState({
      amount: loadedTransaction.amount,
      cashFlow: loadedTransaction.cashFlow,
      date: loadedTransaction.date,
      party: loadedTransaction.party,
      category: loadedTransaction.category,
    });
  }, []);

  console.log('### Refreshing');

  const handleChange = useCallback(
    type => event => {
      setState({ ...state, [type]: event.target.value });
    },
    [state]
  );
  const [addTransaction] = useAddTransactionMutation();

  const handleSubmit = async () => {
    try {
      await addTransaction({ ...state });
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
          }}>
          <Typography
            variant='h4'
            sx={{
              fontFamily: 'balboa, sans-serif',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              pb: 5.5,
            }}>
            Update a Transaction
          </Typography>
          <form>
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
                    label='Enter Party'
                    required
                    value={state.party}
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
                    value={state.category}
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

              <SubmitButton
                type='button'
                onClick={handleSubmit}
                variant='contained'
                sx={{ px: 5, py: 1.5 }}>
                Enter Transaction
              </SubmitButton>
            </Stack>
          </form>
        </Box>
      </Box>
    </EditSection>
  );
}
