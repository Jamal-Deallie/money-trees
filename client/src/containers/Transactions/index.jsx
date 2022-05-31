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
  Form,
  FormWrapper,
  SubmitBtn,
} from './styles';
import { TransactionsListContainer } from '../../containers';

export default function TransactionsContainer() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = event => {
    setSearchParams({ q: event.target.value });
  };

  console.log(searchParams.get('q'));

  return (
    <Box
      sx={{
        background: '#263232',
        padding: '5rem 5rem',
        overflow: 'auto',
        maxHeight: '50rem',
        width: '100%',
      }}>
      <Box>
        <Typography variant='h1' sx={{ color: '#FCF4EC' }}>
          Transactions
        </Typography>

        <SearchBarSection>
          <FormWrapper>
            <div>
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
                />
                <SubmitBtn type='submit'></SubmitBtn>
              </Search>
            </div>
          </FormWrapper>
        </SearchBarSection>
      </Box>

      <Box>
        <TransactionsListContainer term={searchParams.get('q')} />
      </Box>
    </Box>
  );
}
