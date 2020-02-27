import { all } from 'redux-saga/effects';

import clockSagas from './clock';
import userDataSagas from './userData';
import qiitaSagas from './qiita';

function* rootSaga() {
  yield all([...clockSagas, ...userDataSagas, ...qiitaSagas]);
}

export default rootSaga;
