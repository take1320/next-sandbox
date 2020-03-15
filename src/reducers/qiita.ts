import { Reducer } from 'react';

import { QiitaAction, ActionType } from '../actions/qiita';
import { Item } from '../services/qiita/models';

export interface QiitaState {
  items?: Item[];
  itemDetail?: Item;
  isLoading: boolean;
  error?: any;
}

export const initialState: QiitaState = {
  items: [],
  itemDetail: undefined,
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
        isLoading: true,
      };

    case ActionType.GET_ITEMS_SUCCEED:
      return {
        ...state,
        items: action.payload.result.items,
        isLoading: false,
      };

    case ActionType.GET_ITEMS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };

    case ActionType.GET_ITEM_START:
      return {
        ...state,
        isLoading: true,
      };

    case ActionType.GET_ITEM_SUCCEED:
      return {
        ...state,
        itemDetail: action.payload.result.item,
        isLoading: false,
      };

    case ActionType.GET_ITEM_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;
      return state;
    }
  }
};

export default qiitaReducer;
