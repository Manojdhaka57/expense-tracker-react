import { personActionTypes } from '../store/slices/personSlice';

export const addPerson = (payload) => ({
  type: personActionTypes.ADD_PERSON,
  payload,
});

export const getAllPersons = () => ({
  type: personActionTypes.GET_ALL_PERSONS,
});

export const editPerson = (payload) => ({
  type: personActionTypes.EDIT_PERSON,
  payload,
});

export const deletePerson = (payload) => ({
  type: personActionTypes.DELETE_PERSON,
  payload,
});

export const getPersonDetails = (payload) => ({
  type: personActionTypes.GET_PERSON_DETAILS,
  payload,
});

export const userTransactionsSummary = (payload) => ({
  type: personActionTypes.USER_TRANSACTION_SUMMARY,
  payload,
});

export const getPersonTransactionSummary = (payload) => ({
  type: personActionTypes.GET_PERSON_TRANSACTION_SUMMARY,
  payload,
});

export const getPersonTransactionHistory = (payload) => ({
  type: personActionTypes.GET_PERSON_TRANSACTION_HISTORY,
  payload,
});

export const getTransactionDetails = (payload) => ({
  type: personActionTypes.GET_TRANSACTION_DETAILS,
  payload,
});

export const addTransaction = (payload) => ({
  type: personActionTypes.ADD_TRANSACTION,
  payload,
});

export const editTransaction = (payload) => ({
  type: personActionTypes.EDIT_TRANSACTION,
  payload,
});

export const deleteTransaction = (payload) => ({
  type: personActionTypes.DELETE_TRANSACTION,
  payload,
});
