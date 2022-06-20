import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const transactionsAdapter = createEntityAdapter({
  selectId: data => data._id,
});

const initialState = transactionsAdapter.getInitialState();
const user = JSON.parse(localStorage.getItem('user'));

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => '/transactions',
      transformResponse: response => {
        const transaction = response.transactions.reduce((acc, curr) => {
          acc[curr._id] = curr;
          return acc;
        }, {});
        return transactionsAdapter.setAll(initialState, transaction);
      },
      providesTags: ['Transactions'],
    }),
    getTransactionsBySearch: builder.query({
      query: term => `/transactions/search?term=${term}`,
      
    }),
    getTransactionById: builder.query({
      query: _id => `/transactions/${_id}`,
      transformResponse: response => {
        const { transaction } = response.transaction;
        return transactionsAdapter.setAll(initialState, transaction);
      },
      providesTags: ['Transactions'],
    }),
    addTransaction: builder.mutation({
      query: ({ party, category, amount, cashFlow, date }) => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        url: `/transactions/${user?.id}`,
        body: { party, category, amount, cashFlow, date },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Transactions', id: arg.id },
      ],
    }),
    deleteTransaction: builder.mutation({
      query: _id => ({
        method: 'DELETE',
        url: `/transactions/${_id}`,
        body: { _id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Transactions', id: arg.id },
      ],
    }),
    updateTransaction: builder.mutation({
      query: ({ merchant, category, amount, cashFlow, date, _id }) => ({
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        url: `/transactions/${_id}`,
        body: { merchant, category, amount, cashFlow, date },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Transactions', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useGetTransactionsBySearchQuery,
  useGetTransactionByIdQuery,
  useAddTransactionMutation,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
} = extendedApiSlice;

// returns the query result object
export const selectTransactionsResult =
  extendedApiSlice.endpoints.getTransactions.select();

// Creates memoized selector
export const selectTransactionsData = createSelector(
  selectTransactionsResult,
  TransactionsResult => TransactionsResult.data

  // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTransactions,
  selectById: selectTransactionById,
  selectIds: selectTransactionIds,
  // Pass in a selector that returns the transaction slice of state
} = transactionsAdapter.getSelectors(
  state => selectTransactionsData(state) ?? initialState
);

export const selectFilterCredit = createSelector(
  selectAllTransactions,
  TransactionsResult =>
    TransactionsResult.filter(transaction => transaction.cashFlow === 'credit')

  // normalized state object with ids & entities
);

export const selectFilterDebit = createSelector(
  selectAllTransactions,
  TransactionsResult =>
    TransactionsResult.filter(transaction => transaction.cashFlow === 'debit')

  // normalized state object with ids & entities
);
export const selectTotalCreditAmount = createSelector(
  selectFilterCredit,
  TransactionsResult =>
    TransactionsResult.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0)
);

export const selectTotalDebitAmount = createSelector(
  selectFilterDebit,
  TransactionsResult =>
    TransactionsResult.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0)
);
