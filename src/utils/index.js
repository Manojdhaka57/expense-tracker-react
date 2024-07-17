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
  TRANSCTION: '/transaction',
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
};

export const ALERT = {
  EXPIRATION_TIME: 3000,
};
