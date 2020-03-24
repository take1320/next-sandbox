export const ActionType = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
} as const;

export const failure = (error: Error) => ({
  type: ActionType.FAILURE,
  error,
});

export const loadData = () => ({
  type: ActionType.LOAD_DATA,
});

export const loadDataSuccess = (data: any) => ({
  type: ActionType.LOAD_DATA_SUCCESS,
  data: data,
});

export type UserDataAction =
  | ReturnType<typeof loadDataSuccess>
  | ReturnType<typeof failure>
  | ReturnType<typeof loadData>;
