import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
  },
  reducers: {
    recentExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;

export const expenseActionTypes = {
  GET_ALL_EXPENSES: 'expenses/GET_ALL_EXPENSES',
};
