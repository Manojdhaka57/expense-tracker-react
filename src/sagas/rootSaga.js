import { call, all, spawn, fork } from 'redux-saga/effects';
import expenseSaga from './expenseSaga';

export default function* rootSaga() {
  const sagas = [expenseSaga];
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
