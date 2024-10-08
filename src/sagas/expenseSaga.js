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
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(ExpenseService.allExpenses, action.payload);
    if (response.data.statusCode === 200) {
      yield put(expenseActions.recentExpenses(response.data?.data?.expenses));
      yield put(
        expenseActions.updatePagination(response.data?.data?.pagination)
      );
    } else {
      yield put(expenseActions.recentExpenses([]));
      yield put(
        expenseActions.updatePagination({
          page: 0,
          size: 10,
          totalRecords: 0,
        })
      );
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

export function* getExpensesSumaryHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(ExpenseService.expensesSummary, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        expenseActions.setExpensesSummary(response.data?.data?.expenses)
      );
      yield put(
        expenseActions.setMonthWiseExpenses(
          response.data?.data?.monthWiseExpenses
        )
      );
    } else {
      yield put(expenseActions.setExpensesSummary([]));
      yield put(expenseActions.setMonthWiseExpenses([]));
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

export function* addExpenseHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(ExpenseService.addExpense, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'expense added successfully',
        })
      );
    } else {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.ERROR,
          message: response?.data?.message || '',
          messageId: 'something went wrong please try again',
        })
      );
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

export function* getCategoryWiseExpenseHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      ExpenseService.getCategoryWiseExpense,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(expenseActions.setCategoryWiseExpenses(response.data?.data));
    } else {
      yield put(expenseActions.setCategoryWiseExpenses([]));
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

export function* getDayWiseExpenseHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      ExpenseService.getDayWiseExpense,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(expenseActions.updateDayWiseExpenses(response.data?.data));
    } else {
      yield put(expenseActions.updateDayWiseExpenses([]));
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
  yield takeLatest(
    expenseActionTypes.GET_EXPENSES_SUMMARY,
    getExpensesSumaryHandler
  );
  yield takeLatest(expenseActionTypes.ADD_EXPENSE, addExpenseHandler);
  yield takeLatest(
    expenseActionTypes.GET_CATEGORY_WISE_EXPENSE,
    getCategoryWiseExpenseHandler
  );
  yield takeLatest(
    expenseActionTypes.GET_DAY_WISE_EXPENSE,
    getDayWiseExpenseHandler
  );
}
