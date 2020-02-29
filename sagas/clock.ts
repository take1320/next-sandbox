import { call, delay, put, take } from 'redux-saga/effects';

import { tickClock, ActionType } from '../actions/clock';

function* runClockSaga() {
  yield take(ActionType.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

const sagas = [call(runClockSaga)];

export default sagas;
