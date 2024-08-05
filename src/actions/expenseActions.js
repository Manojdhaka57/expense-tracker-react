import { expenseActionTypes } from '../store/slices/expenseSlice';

export const getAllExpenses = (payload) => ({
  type: expenseActionTypes.GET_ALL_EXPENSES,
  payload,
});

export const getExpensesSummary = (payload) => ({
  type: expenseActionTypes.GET_EXPENSES_SUMMARY,
  payload,
});

export const addExpense = (payload) => ({
  type: expenseActionTypes.ADD_EXPENSE,
  payload,
});

export const getCategoryWiseExpense = (payload) => ({
  type: expenseActionTypes.GET_CATEGORY_WISE_EXPENSE,
  payload,
});
