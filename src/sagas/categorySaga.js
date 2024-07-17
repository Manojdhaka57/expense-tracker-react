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

export function* addCategoryHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(CategoryService.addCategory, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Category added successfully',
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

export default function* categorySaga() {
  yield takeLatest(
    categoryActionTypes.GET_ALL_CATEGORIES,
    getAllCategoryHandler
  );
  yield takeLatest(categoryActionTypes.ADD_CATEGORY, addCategoryHandler);
}
