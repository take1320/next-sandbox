import { CounterAction } from '../actions/counter';
import * as ActionType from '../actions/counterConstants';
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
    case ActionType.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case ActionType.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case ActionType.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;

      return state;
    }
  }
};

export default counterReducer;
