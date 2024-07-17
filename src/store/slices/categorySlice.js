import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice.reducer;

export const categoryActionTypes = {
  GET_ALL_CATEGORIES: 'category/GET_ALL_CATEGORIES',
  ADD_CATEGORY: 'category/ADD_CATEGORY',
};
