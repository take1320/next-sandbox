import { call, put, takeLatest, fork } from 'redux-saga/effects';

import * as ActionType from '../actions/qiitaConstants';
import { getItems, getItem } from '../actions/qiita';
import { getItemsFactory, getItemFactory } from '../services/qiita/api';

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

function* runGetItem(action: ReturnType<typeof getItem.start>) {
  try {
    const api = getItemFactory();
    const item = yield call(api, action.payload.params.id);
    yield put(getItem.succeed({ item: item }));
  } catch (error) {
    yield put(getItem.fail(error));
  }
}

export function* watchGetItem() {
  yield takeLatest(ActionType.GET_ITEM_START, runGetItem);
}

// export default function* rootSaga() {
//   yield all([);
// }
const sagas = [fork(watchGetItems), fork(watchGetItem)];
export default sagas;
