import { call, put, takeLatest } from 'redux-saga/effects';
import { loaderActions } from '../store/slices/loaderSlice';
import { personActionTypes, personActions } from '../store/slices/personSlice';
import PersonService from '../services/PersonService';
import { alertActions } from '../store/slices/alertSlice';
import { apiResponseStatus } from '../config/apiConfig';
import {
  getAllPersons,
  getPersonTransactionHistory,
  getPersonTransactionSummary,
} from '../actions/personActions';

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

export function* getPersonDetailsHandler(action) {
  try {
    const response = yield call(PersonService.getPersonDetails, action.payload);
    if (response.data.statusCode === 200) {
      yield put(personActions.updatePersonDetails(response.data.data));
    } else {
      yield put(personActions.updatePersonDetails({}));
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

export function* getUserTransactionSummaryHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      PersonService.userTransactionsSummary,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(
        personActions.updateUserTransactionsSummary(
          response.data?.data?.userTransactionSummary
        )
      );
    } else {
      yield put(personActions.updateUserTransactionsSummary([]));
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

export function* getPersonTransactionSummaryHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      PersonService.getPersonTransactionSummary,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(
        personActions.updatePersonTransactionsSummary(response.data?.data)
      );
    } else {
      yield put(personActions.updatePersonTransactionsSummary([]));
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

export function* getPersonTransactionHistoryHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      PersonService.getPersonTransactionHistory,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(
        personActions.updatePersonTransactionsHistory(response.data?.data)
      );
    } else {
      yield put(personActions.updatePersonTransactionsHistory([]));
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

export function* getTransactionDetailsHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      PersonService.getTransactionDetails,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(personActions.updateTransactionDetails(response.data?.data));
    } else {
      yield put(personActions.updateTransactionDetails({}));
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

export function* addTransactionHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(PersonService.addTransaction, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Person added successfully',
        })
      );
      yield put(
        getPersonTransactionSummary({ personId: action.payload.personId })
      );
      yield put(
        getPersonTransactionHistory({ personId: action.payload.personId })
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

export function* editTransactionHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(PersonService.editTransaction, action.payload);
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Person edited successfully',
        })
      );
      yield put(
        getPersonTransactionSummary({ personId: action.payload.personId })
      );
      yield put(
        getPersonTransactionHistory({ personId: action.payload.personId })
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

export function* deleteTransactionHandler(action) {
  try {
    yield put(loaderActions.showLoader());
    const response = yield call(
      PersonService.deleteTransaction,
      action.payload
    );
    if (response.data.statusCode === 200) {
      yield put(
        alertActions.showAlert({
          show: true,
          type: apiResponseStatus.SUCCESS,
          message: response?.data?.message || '',
          messageId: 'Person delete successfully',
        })
      );
      yield put(
        getPersonTransactionSummary({ personId: action.payload.personId })
      );
      yield put(
        getPersonTransactionHistory({ personId: action.payload.personId })
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
export default function* personSaga() {
  yield takeLatest(personActionTypes.ADD_PERSON, addPersonHandler);
  yield takeLatest(personActionTypes.EDIT_PERSON, editPersonHandler);
  yield takeLatest(personActionTypes.DELETE_PERSON, deletePersonHandler);
  yield takeLatest(personActionTypes.GET_ALL_PERSONS, getAllPersonsHandler);
  yield takeLatest(
    personActionTypes.USER_TRANSACTION_SUMMARY,
    getUserTransactionSummaryHandler
  );
  yield takeLatest(
    personActionTypes.GET_PERSON_TRANSACTION_SUMMARY,
    getPersonTransactionSummaryHandler
  );
  yield takeLatest(
    personActionTypes.GET_PERSON_TRANSACTION_HISTORY,
    getPersonTransactionHistoryHandler
  );
  yield takeLatest(
    personActionTypes.GET_TRANSACTION_DETAILS,
    getTransactionDetailsHandler
  );
  yield takeLatest(personActionTypes.ADD_TRANSACTION, addTransactionHandler);
  yield takeLatest(personActionTypes.EDIT_TRANSACTION, editTransactionHandler);
  yield takeLatest(
    personActionTypes.DELETE_TRANSACTION,
    deleteTransactionHandler
  );
  yield takeLatest(
    personActionTypes.GET_PERSON_DETAILS,
    getPersonDetailsHandler
  );
}
