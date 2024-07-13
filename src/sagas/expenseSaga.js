import { call, put, takeLatest } from 'redux-saga/effects';
import { loaderActions } from '../store/slices/loaderSlice';
import ExpenseService from '../services/ExpenseService';
import {
  expenseActionTypes,
  expenseActions,
} from '../store/slices/expenseSlice';
import { alertActions } from '../store/slices/alertSlice';
import { apiResponseStatus } from '../config/apiConfig';

export function* getAllExpensesHandler(action) {
  console.log('getAllExpensesHandler');
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(ExpenseService.allExpenses, action.payload);
    if (response.data.statusCode === 200) {
      yield put(expenseActions.recentExpenses(response.data?.data?.expenses));
    } else {
      yield put(expenseActions.recentExpenses([]));
    }
  } catch (error) {
    yield put(
      alertActions.showAlert({
        show: true,
        type: apiResponseStatus.ERROR,
        message: error.response?.data?.message || '',
        messageId: 'something went wrong please try again',
      })
    );
  } finally {
    yield put(loaderActions.hideLoader());
  }
}

export default function* expenseSaga() {
  yield takeLatest(expenseActionTypes.GET_ALL_EXPENSES, getAllExpensesHandler);
}
