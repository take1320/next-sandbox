import { combineReducers } from 'redux';

import clockReducer from './clock';
import counterReducer from './counter';
import userDataReducer from './userData';

const rootReducer = combineReducers({
  clock: clockReducer,
  counter: counterReducer,
  userData: userDataReducer,
});

export default rootReducer;
