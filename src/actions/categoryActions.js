import { categoryActionTypes } from '../store/slices/categorySlice';

export const getAllCategory = () => ({
  type: categoryActionTypes.GET_ALL_CATEGORIES,
});

export const addCategory = (payload) => ({
  type: categoryActionTypes.ADD_CATEGORY,
  payload,
});
