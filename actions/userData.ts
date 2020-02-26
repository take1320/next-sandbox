import * as ActionType from './userDataConstatns';

export const failure = (error: Error) => ({
  type: ActionType.FAILURE as typeof ActionType.FAILURE,
  error,
});

export const loadData = () => ({
  type: ActionType.LOAD_DATA as typeof ActionType.LOAD_DATA,
});

export const loadDataSuccess = (data: any) => ({
  type: ActionType.LOAD_DATA_SUCCESS as typeof ActionType.LOAD_DATA_SUCCESS,
  data: data,
});

export type UserDataAction =
  | ReturnType<typeof loadDataSuccess>
  | ReturnType<typeof failure>
  | ReturnType<typeof loadData>;
