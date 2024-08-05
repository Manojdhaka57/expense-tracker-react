import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    expensesSummary: [],
    categoryWiseExpense: [],
    monthWiseExpenses: [],
  },
  reducers: {
    recentExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    setExpensesSummary: (state, action) => {
      state.expensesSummary = action.payload;
    },
    setCategoryWiseExpenses: (state, action) => {
      state.categoryWiseExpense = action.payload;
    },
    setMonthWiseExpenses: (state, action) => {
      state.monthWiseExpenses = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;

export const expenseActionTypes = {
  GET_ALL_EXPENSES: 'expenses/GET_ALL_EXPENSES',
  GET_EXPENSES_SUMMARY: 'expense/GET_EXPENSES_SUMMARY',
  ADD_EXPENSE: 'expense/ADD_EXPENSE',
  GET_CATEGORY_WISE_EXPENSE: 'expense/GET_CATEGORY_WISE_EXPENSE',
};
