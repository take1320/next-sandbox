import { delay, put, take, cancel, call, fork } from 'redux-saga/effects';

import { tickClock, ActionType } from '../actions/clock';

function* runClockSaga() {
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* watchClockSaga() {
  while (yield take(ActionType.START_CLOCK)) {
    const task = yield fork(runClockSaga);
    yield take(ActionType.STOP_CLOCK);
    yield cancel(task);
  }
}

const sagas = [call(watchClockSaga)];

export default sagas;
