import { actionTypes, UserDataAction } from '../actions/userData';
import { Reducer } from 'react';

export interface UserDataState {
  placeholderData: any;
}

export const initialState: UserDataState = {
  placeholderData: null,
};

const userDataReducer: Reducer<UserDataState, UserDataAction> = (
  state: UserDataState = initialState,
  action: any,
):UserDataState => {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const hoge: never = action;
      return state;
    }
  }
};

export default userDataReducer;
