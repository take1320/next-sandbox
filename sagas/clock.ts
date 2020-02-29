import { call, delay, put, take } from 'redux-saga/effects';

import { tickClock } from '../actions/clock';
import * as ActionType from '../actions/clockConstatnts';

function* runClockSaga() {
  yield take(ActionType.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

const sagas = [call(runClockSaga)];

export default sagas;
