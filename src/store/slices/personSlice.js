import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
  name: 'person',
  initialState: {
    allPersons: [],
    transactionsSummary: [],
    personTransactionsSummary: [],
    personTransactionsHistory: [],
    transactionDetails: {},
    personDetails: {},
  },
  reducers: {
    updateAllPersons: (state, action) => {
      state.allPersons = action.payload;
    },
    updateUserTransactionsSummary: (state, action) => {
      state.transactionsSummary = action.payload;
    },
    updatePersonTransactionsSummary: (state, action) => {
      state.personTransactionsSummary = action.payload;
    },
    updatePersonTransactionsHistory: (state, action) => {
      state.personTransactionsHistory = action.payload;
    },
    updateTransactionDetails: (state, action) => {
      state.transactionDetails = action.payload;
    },
    updatePersonDetails: (state, action) => {
      state.personDetails = action.payload;
    },
  },
});

export default personSlice.reducer;
export const personActions = personSlice.actions;

export const personActionTypes = {
  ADD_PERSON: 'person/ADD_PERSON',
  GET_ALL_PERSONS: 'person/GET_ALL_PERSONS',
  GET_PERSON_DETAILS: 'person/GET_PERSON_DETAILS',
  EDIT_PERSON: 'person/EDIT_PERSON',
  DELETE_PERSON: 'person/DELETE_PERSON',
  USER_TRANSACTION_SUMMARY: 'person/USER_TRANSACTION_SUMMARY',
  GET_PERSON_TRANSACTION_SUMMARY: 'person/GET_PERSON_TRANSACTION_SUMMARY',
  GET_PERSON_TRANSACTION_HISTORY: 'person/GET_PERSON_TRANSACTION_HISTORY',
  GET_TRANSACTION_DETAILS: 'person/GET_TRANSACTION_DETAILS',
  ADD_TRANSACTION: 'person/ADD_TRANSACTION',
  EDIT_TRANSACTION: 'person/EDIT_TRANSACTION',
  DELETE_TRANSACTION: 'person/DELETE_TRANSACTION',
};
