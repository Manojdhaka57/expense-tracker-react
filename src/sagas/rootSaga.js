import { all, fork } from 'redux-saga/effects';
import expenseSaga from './expenseSaga';
import categorySaga from './categorySaga';
import personSaga from './personSaga';

export default function* rootSaga() {
  const sagas = [expenseSaga, categorySaga, personSaga];
  yield all(sagas.map((saga) => fork(saga)));
  // yield all(
  //   sagas.map((saga) => {
  //     spawn(function* () {
  //       while (true) {
  //         try {
  //           yield call(saga);
  //           break;
  //         } catch (error) {
  //           console.error('Unexpected saga termination ', error);
  //         }
  //       }
  //     });
  //   })
  // );
}
