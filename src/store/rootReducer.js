import { combineReducers } from '@reduxjs/toolkit';
import loaderReducer from './slices/loaderSlice';
import expenseReducer from './slices/expenseSlice';
import alertReducer from './slices/alertSlice';
import categoryReducer from './slices/categorySlice';
const appReducer = combineReducers({
  loaders: loaderReducer,
  expenses: expenseReducer,
  alert: alertReducer,
  category: categoryReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
