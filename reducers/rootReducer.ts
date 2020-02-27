import { combineReducers } from 'redux';

import clockReducer, { ClockState } from './sample/clock';
import counterReducer, { CounterState } from './sample/counter';
import userDataReducer, { UserDataState } from './sample/userData';
import qiitaReducer, { QiitaState } from './qiita';

export interface ReduxState {
  clock: ClockState;
  counter: CounterState;
  userData: UserDataState;
  qiita: QiitaState;
}

const rootReducer = combineReducers({
  clock: clockReducer,
  counter: counterReducer,
  userData: userDataReducer,
  qiita: qiitaReducer,
});

export default rootReducer;
