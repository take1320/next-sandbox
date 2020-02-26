import { actionTypes, CounterAction } from '../actions/counter';
import { Reducer } from 'react';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;
      console.log("hoge" + action.type);
      return state;
    }
  }
};

export default counterReducer;
