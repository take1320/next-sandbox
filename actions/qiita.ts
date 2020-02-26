// import { AxiosError } from 'axios';

import { Item } from '../services/qiita/models';
import * as ActionType from './qiitaConstants';

// interface GetItemsParams {
//   companyName: string;
// }
interface GetItemsResult {
  Items: Item[];
}

export const getItems = {
  start: () => ({
    type: ActionType.GET_ITEMS_START as typeof ActionType.GET_ITEMS_START,
    // payload: {},
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

export type QiitaAction =
  | ReturnType<typeof getItems.start>
  | ReturnType<typeof getItems.succeed>
  | ReturnType<typeof getItems.fail>;
