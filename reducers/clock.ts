import { actionTypes, ClockAction } from '../actions/clock';
import { Reducer } from 'react';

export interface ClockState {
  lastUpdate: number;
  light: boolean;
  placeholderData?: number | null;
}

export const initialState: ClockState = {
  lastUpdate: 0,
  light: false,
  placeholderData: null,
};

// // TODO actionをClockActionに設定すると
const clockReducer: Reducer<ClockState, ClockAction> = (
  state: ClockState = initialState,
  action: any,
): ClockState => {
  switch (action.type) {
    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;
      return state;
    }
  }
};

export default clockReducer;
