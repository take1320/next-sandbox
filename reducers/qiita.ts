import { Reducer } from 'react';

import { QiitaAction } from '../actions/qiita';
import * as ActionType from '../actions/qiitaConstants';
import { Item } from '../services/qiita/models';

export interface QiitaState {
  items?: Item[];
  itemDetail?: Item | null;
}

export const initialState: QiitaState = {
  items: [],
  itemDetail: null,
};

const qiitaReducer: Reducer<QiitaState, QiitaAction> = (
  state: QiitaState = initialState,
  action: QiitaAction,
): QiitaState => {
  switch (action.type) {
    case ActionType.GET_ITEMS_START:
      return {
        ...state,
      };

    case ActionType.GET_ITEMS_SUCCEED:
      return {
        ...state,
        ...{ items: action.payload.result.items },
      };

    case ActionType.GET_ITEMS_FAIL:
      return {
        ...state,
        ...{ error: action.payload.error },
      };

    case ActionType.GET_ITEM_START:
      return {
        ...state,
      };

    case ActionType.GET_ITEM_SUCCEED:
      return {
        ...state,
        ...{ item: action.payload.result.item },
      };

    case ActionType.GET_ITEM_FAIL:
      return {
        ...state,
        ...{ error: action.payload.error },
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;
      return state;
    }
  }
};

export default qiitaReducer;
