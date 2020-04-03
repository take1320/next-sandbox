import { Item } from '../../services/qiita/models';

export const ActionType = {
  GET_ITEMS_START: 'QIITA/GET_ITEMS_START',
  GET_ITEMS_SUCCEED: 'QIITA/GET_ITEMS_SUCCEED',
  GET_ITEMS_FAIL: 'QIITA/GET_ITEMS_FAIL',
  GET_ITEM_START: 'QIITA/GET_ITEM_START',
  GET_ITEM_SUCCEED: 'QIITA/GET_ITEM_SUCCEED',
  GET_ITEM_FAIL: 'QIITA/GET_ITEM_FAIL',
} as const;

interface GetItemsResult {
  items: Item[];
}
interface GetItemParams {
  id: string | string[];
}
interface GetItemResult {
  item: Item;
}

export const getItems = {
  start: () => ({
    type: ActionType.GET_ITEMS_START,
  }),

  succeed: (result: GetItemsResult) => ({
    type: ActionType.GET_ITEMS_SUCCEED,
    payload: { result },
  }),

  fail: (error: Error) => ({
    type: ActionType.GET_ITEMS_FAIL,
    payload: { error },
    error: true,
  }),
};

export const getItem = {
  start: (params: GetItemParams) => ({
    type: ActionType.GET_ITEM_START as typeof ActionType.GET_ITEM_START,
    payload: { params },
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
