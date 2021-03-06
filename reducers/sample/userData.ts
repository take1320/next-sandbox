import { UserDataAction, ActionType } from '../../actions/userData';
import { Reducer } from 'react';

export interface UserDataState {
  placeholderData: any;
}

export const initialState: UserDataState = {
  placeholderData: null,
};

const userDataReducer: Reducer<UserDataState, UserDataAction> = (
  state: UserDataState = initialState,
  action: UserDataAction,
): UserDataState => {
  switch (action.type) {
    case ActionType.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case ActionType.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;
      return state;
    }
  }
};

export default userDataReducer;
