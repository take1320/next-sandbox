import { combineReducers } from 'redux';

import clockReducer, { ClockState } from './clock';
import counterReducer, { CounterState } from './counter';
import userDataReducer, { UserDataState } from './userData';

export interface ReduxState {
  clock: ClockState;
  counter: CounterState;
  userData: UserDataState;
}

const rootReducer = combineReducers({
  clock: clockReducer,
  counter: counterReducer,
  userData: userDataReducer,
});

export default rootReducer;
