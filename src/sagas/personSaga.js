import { call, put, takeLatest } from 'redux-saga/effects';
import { loaderActions } from '../store/slices/loaderSlice';
import { personActionTypes, personActions } from '../store/slices/personSlice';
import PersonService from '../services/PersonService';
import { alertActions } from '../store/slices/alertSlice';
import { apiResponseStatus } from '../config/apiConfig';
import { getAllPersons } from '../actions/personActions';

export function* addPersonHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(PersonService.addPerson, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Person added successfully',
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

export function* getAllPersonsHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(PersonService.allPersons);
    if (response.data.statusCode === 200) {
      yield put(personActions.updateAllPersons(response.data?.data));
    } else {
      yield put(personActions.updateAllPersons([]));
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

export function* editPersonHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(PersonService.editPerson, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Person edit successfully',
        })
      );
      yield put(getAllPersons());
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

export function* deletePersonHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(PersonService.deletePerson, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Person delete successfully',
        })
      );
      yield put(getAllPersons());
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

export default function* personSaga() {
  yield takeLatest(personActionTypes.ADD_PERSON, addPersonHandler);
  yield takeLatest(personActionTypes.EDIT_PERSON, editPersonHandler);
  yield takeLatest(personActionTypes.DELETE_PERSON, deletePersonHandler);
  yield takeLatest(personActionTypes.GET_ALL_PERSONS, getAllPersonsHandler);
}
