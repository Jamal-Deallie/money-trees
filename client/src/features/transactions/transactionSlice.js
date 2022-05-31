import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const transactionsAdapter = createEntityAdapter({
  selectId: data => data._id,
});

const initialState = transactionsAdapter.getInitialState();
const userId = '6295a74ab4e78bcb041d932c';
export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getTransactions: builder.query({
      query: () => '/transactions',
      transformResponse: response => {
        const { transaction } = response.transaction;
        return transactionsAdapter.setAll(initialState, transaction);
      },
      providesTags: ['Transactions'],
    }),
    addTransaction: builder.mutation({
      query: ({ merchant, category, amount, cashFlow, date }) => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        url: `/transactions/${userId}`,
        body: { merchant, category, amount, cashFlow, date },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Transactions', id: arg.id },
      ],
    }),
  }),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } =
  extendedApiSlice;

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

export const selectFilterTransactionsData = createSelector(
  selectAllTransactions,
  TransactionsResult =>
    TransactionsResult.filter(transaction => transaction.cashFlow === 'credit')

  // normalized state object with ids & entities
);
export const selectTotalCreditAmount = createSelector(
  selectFilterTransactionsData,
  TransactionsResult =>
    TransactionsResult.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0)
);
