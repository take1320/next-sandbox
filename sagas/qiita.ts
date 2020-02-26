import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/qiitaConstants';
import { getItems } from '../actions/qiita';
import { getItemsFactory } from '../services/qiita/api';

function* runGetItems() {
  // const { companyName } = action.payload;

  try {
    const api = getItemsFactory();
    const items = yield call(api);

    yield put(getItems.succeed({ Items: items }));
  } catch (error) {
    yield put(getItems.fail(error));
  }
}

export function* watchGetItems() {
  yield takeLatest(Action.GET_ITEMS_START, runGetItems);
}

export default function* rootSaga() {
  yield all([fork(watchGetItems)]);
}
