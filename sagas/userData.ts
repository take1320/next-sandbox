/* global fetch */

import { put, takeLatest } from 'redux-saga/effects';
import 'isomorphic-unfetch';

import {
  actionTypes,
  failure,
  loadDataSuccess,
} from '../actions/userData';

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

const sagas = [
  console.log("foooo"),
  takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
];
export default sagas;
