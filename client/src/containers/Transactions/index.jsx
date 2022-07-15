import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  SearchBarSection,
  Search,
  StyledInputBase,
  SearchIconWrapper,
  FormWrapper,
  SubmitBtn,
  TransactionSection,
  Header,
  TransactionInner,
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
  }, [searchParams, setSearchParams]);

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

      <TransactionInner>
        {searchParams.get('keyword') ? (
          <SearchListContainer term={searchParams.get('keyword')} />
        ) : (
          <TransactionsListContainer />
        )}
      </TransactionInner>
    </TransactionSection>
  );
}
