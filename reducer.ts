import { Reducer } from 'redux';
// import { AxiosError } from 'axios';

import { QiitaAction } from './actions/qiita';
import * as ActionType from './actions/qiitaConstants';
import { Item } from './services/qiita/models';

export interface QiitaState {
  items: Item[];
  isLoading: boolean;
  error?: Error | null;
}

export const initialState: QiitaState = {
  items: [],
  isLoading: false,
};

const qiitaReducer: Reducer<QiitaState, QiitaAction> = (
  state: QiitaState = initialState,
  action: QiitaAction,
): QiitaState => {
  switch (action.type) {
    case ActionType.GET_ITEMS_START:
      return {
        ...state,
        items: [],
        isLoading: true,
      };
    case ActionType.GET_ITEMS_SUCCEED:
      return {
        ...state,
        items: action.payload.result.Items,
        isLoading: false,
      };
    case ActionType.GET_ITEMS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default qiitaReducer;
