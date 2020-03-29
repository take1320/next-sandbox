import { put, takeLatest } from 'redux-saga/effects';
import 'isomorphic-unfetch';

import { failure, loadDataSuccess, ActionType } from '../actions/userData';

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

const sagas = [takeLatest(ActionType.LOAD_DATA, loadDataSaga)];
export default sagas;
