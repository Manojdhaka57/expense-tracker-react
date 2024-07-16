import { call, put, takeLatest } from 'redux-saga/effects';
import { apiResponseStatus } from '../config/apiConfig';
import CategoryService from '../services/CategoryService';
import { alertActions } from '../store/slices/alertSlice';
import {
  categoryActionTypes,
  categoryActions,
} from '../store/slices/categorySlice';
import { loaderActions } from '../store/slices/loaderSlice';

export function* getAllCategoryHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(CategoryService.getAllCategory);
    if (response.data.statusCode === 200) {
      yield put(categoryActions.updateCategories(response.data?.data));
    } else {
      yield put(categoryActions.updateCategories([]));
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

export default function* categorySaga() {
  yield takeLatest(
    categoryActionTypes.GET_ALL_CATEGORIES,
    getAllCategoryHandler
  );
}
