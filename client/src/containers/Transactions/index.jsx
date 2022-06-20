import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {
  SearchBarSection,
  Search,
  StyledInputBase,
  SearchIconWrapper,
  FormWrapper,
  SubmitBtn,
  TransactionSection,
  Header,
} from './styles';
import {
  TransactionsListContainer,
  SearchListContainer,
} from '../../containers';
import { useDispatch } from 'react-redux';
import { extendedApiSlice } from '../../features/transactions/transactionSlice';

export default function TransactionsContainer() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(extendedApiSlice.endpoints.getTransactions.initiate());
  });
  // This function will be called whenever the text input changes
  const handleChange = event => {
    let search;
    if (event.target.value) {
      search = {
        keyword: event.target.value,
      };
    } else {
      search = undefined;
    }

    setSearchParams(search, { replace: true });
  };

  useEffect(() => {
    if (searchParams.has('keyword')) {
      const token = searchParams.get('keyword');
      if (token) {
        searchParams.delete('keyword');

        console.dir(searchParams.toString());
        setSearchParams(searchParams);
      }
    }
  }, []);

  return (
    <TransactionSection>
      <Box>
        <Header>Your Transactions</Header>
      </Box>

      <SearchBarSection>
        <FormWrapper>
         
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  color='primary.main'
                  sx={{ fontSize: 25, color: '#FCF4EC' }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search A Transaction'
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleChange}
                value={searchParams.keyword}
              />

              <SubmitBtn type='submit'></SubmitBtn>
            </Search>
        
        </FormWrapper>
      </SearchBarSection>

      <Box sx={{ mt: 5.5, maxHeight: '60rem', overflow: 'auto' }}>
        {searchParams.get('keyword') ? (
          <SearchListContainer term={searchParams.get('keyword')} />
        ) : (
          <TransactionsListContainer />
        )}
      </Box>
    </TransactionSection>
  );
}
