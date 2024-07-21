import { combineReducers } from '@reduxjs/toolkit';
import loaderReducer from './slices/loaderSlice';
import expenseReducer from './slices/expenseSlice';
import alertReducer from './slices/alertSlice';
import categoryReducer from './slices/categorySlice';
import personReducer from './slices/personSlice';
const appReducer = combineReducers({
  loaders: loaderReducer,
  expenses: expenseReducer,
  alert: alertReducer,
  category: categoryReducer,
  person: personReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
