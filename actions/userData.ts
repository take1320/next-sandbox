export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
};

export const failure = (error: Error) => ({
  type: actionTypes.FAILURE as typeof actionTypes.FAILURE,
  error,
});

export const loadData = () => ({
  type: actionTypes.LOAD_DATA as typeof actionTypes.LOAD_DATA,
});

export const loadDataSuccess = (data: any) => ({
  type: actionTypes.LOAD_DATA_SUCCESS as typeof actionTypes.LOAD_DATA_SUCCESS,
  data :data
});

export type UserDataAction =
  | ReturnType<typeof loadDataSuccess>
  | ReturnType<typeof failure>
  | ReturnType<typeof loadData>;
