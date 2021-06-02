import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';

export interface IAuth {
  loginStatus: boolean;
  loading: boolean;
  error?: string;
}

const initialState = {
  get state(): IAuth {
    return {
      loginStatus: false,
      loading: false,
      error: '',
    };
  },
};

export default function reducer(
  state: IAuth = initialState.state,
  action: IActionType
) {
  switch (action.type) {
    case `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`:
      return {
        loginStatus: true,
        loading: false,
      };
    case `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`:
      return {
        loading: false,
        loginStatus: false,
        error: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        loginStatus: false,
      };

    default:
      return state;
  }
}
