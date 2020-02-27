import { Item } from '../services/qiita/models';
import * as ActionType from './qiitaConstants';

interface GetItemsResult {
  items: Item[];
}
interface GetItemResult {
  item: Item;
}

export const getItems = {
  start: () => ({
    type: ActionType.GET_ITEMS_START as typeof ActionType.GET_ITEMS_START,
  }),

  succeed: (result: GetItemsResult) => ({
    type: ActionType.GET_ITEMS_SUCCEED as typeof ActionType.GET_ITEMS_SUCCEED,
    payload: { result },
  }),

  fail: (error: Error) => ({
    type: ActionType.GET_ITEMS_FAIL as typeof ActionType.GET_ITEMS_FAIL,
    payload: { error },
    error: true,
  }),
};

export const getItem = {
  start: () => ({
    type: ActionType.GET_ITEM_START as typeof ActionType.GET_ITEM_START,
  }),

  succeed: (result: GetItemResult) => ({
    type: ActionType.GET_ITEM_SUCCEED as typeof ActionType.GET_ITEM_SUCCEED,
    payload: { result },
  }),

  fail: (error: Error) => ({
    type: ActionType.GET_ITEM_FAIL as typeof ActionType.GET_ITEM_FAIL,
    payload: { error },
    error: true,
  }),
};

export type QiitaAction =
  | ReturnType<typeof getItems.start>
  | ReturnType<typeof getItems.succeed>
  | ReturnType<typeof getItems.fail>
  | ReturnType<typeof getItem.start>
  | ReturnType<typeof getItem.succeed>
  | ReturnType<typeof getItem.fail>;
