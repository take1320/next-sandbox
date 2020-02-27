import { call, put, takeLatest, fork } from 'redux-saga/effects';

import * as ActionType from '../actions/qiitaConstants';
import { getItems } from '../actions/qiita';
import { getItemsFactory } from '../services/qiita/api';

function* runGetItems() {
  try {
    const api = getItemsFactory();
    const items = yield call(api);
    yield put(getItems.succeed({ items: items }));
  } catch (error) {
    yield put(getItems.fail(error));
  }
}

export function* watchGetItems() {
  yield takeLatest(ActionType.GET_ITEMS_START, runGetItems);
}

// export default function* rootSaga() {
//   yield all([);
// }
const sagas = [fork(watchGetItems)];
export default sagas;
