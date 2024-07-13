import { expenseActionTypes } from '../store/slices/expenseSlice';

export const getAllExpenses = (payload) => ({
  type: expenseActionTypes.GET_ALL_EXPENSES,
  payload,
});
