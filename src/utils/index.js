import { format, isToday, isYesterday } from 'date-fns';

export const ROUTES = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  DASHBOARD: '/dashboard',
  ADD: '/add',
  ADD_EXPENSE: '/add/expense',
  ADD_CATEGORY: '/add/category',
  ADD_PERSON: '/add/person',
  USER_DETAILS: '/userDetails',
  WALLET: '/wallet',
  TRANSCTION: '/transactions',
  PERSON_TRANSACTION: '/transactions/:personId',
};

export const API_ENDPOINT = {
  LOGIN: 'users/login',
  VALIDATE: 'users/validate',
  LOGOUT: 'users/logout',
  REFRESH_TOKEN: 'users/refreshToken',
  ADD_EXPENSE: '/expense/addExpenses',
  ALL_EXPENSES: 'expense/allExpenses',
  EXPENSES_SUMMARY: 'expense/expenseSummary',
  GET_ALL_CATEGORIES: 'category/allCategories',
  ADD_CATEGORY: 'category/addCategory',
  ADD_PERSON: 'person/addPerson',
  ALL_PERSONS: 'person/all/persons',
  EDIT_PERSON: 'person',
  DELETE_PERSON: 'person',
  GET_PERSON_DETAILS: 'person',
  ADD_TRANSACTION: 'transaction/addTransaction',
  TRANSACTION_DETAILS: 'transaction',
  EDIT_TRANSACION: 'transaction',
  DELETE_TRANSACTION: 'transaction',
  PERSON_TRANSACTIONS_HISTORY: 'transaction/personTransactionsHistory',
  PERSON_TRANSACTIONS_SUMMARY: 'transaction/personTransactionsSummary',
  USER_TRANSACTION_SUMMARY: 'transaction/userTransactionsSummary',
};

export const ALERT = {
  EXPIRATION_TIME: 3000,
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (!date) {
    return '';
  }
  if (isToday(date)) {
    // Format for today
    return format(date, 'h:mm aa');
  } else if (isYesterday(date)) {
    // Format for yesterday
    return 'Yesterday ' + format(date, 'h:mm aa');
  } else {
    // Format for before yesterday
    const formattedDate = format(date, "d MMMM yyyy 'at' h:mm aa");
    return formattedDate;
  }
};
