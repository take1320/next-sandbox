import { all } from 'redux-saga/effects';

import clockSagas from './clock';
import userDataSagas from './userData';

function* rootSaga() {
  yield all([...clockSagas, ...userDataSagas]);
}

export default rootSaga;
