import { call, all, spawn, fork } from 'redux-saga/effects';
import expenseSaga from './expenseSaga';
import categorySaga from './categorySaga';

export default function* rootSaga() {
  const sagas = [expenseSaga, categorySaga];
  yield all(sagas.map((saga) => fork(saga)));
  // yield all(
  //   sagas.map((saga) => {
  //     console.log("@saga")
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
