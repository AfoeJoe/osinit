import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';
import { IEmployeeItem } from '../Actions/Models';

export interface IEmployee {
  loading: boolean;
  employees: null | IEmployeeItem[];
  error?: string;
  reload?: boolean;
}

const initialState = {
  get state(): IEmployee {
    return {
      loading: false,
      employees: null,
      error: '',
      reload: false,
    };
  },
};

export default function reducer(
  state: IEmployee = initialState.state,
  action: IActionType
) {
  switch (action.type) {
    case `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.SUCCESS}`:
      return {
        employees: action.payload,
        loading: false,
      };

    case `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.CREATE_EMPLOYEE}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.CREATE_EMPLOYEE}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: true,
      };

    case `${ActionTypes.CREATE_EMPLOYEE}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.EDIT_EMPLOYEE}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.EDIT_EMPLOYEE}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: true,
      };

    case `${ActionTypes.EDIT_EMPLOYEE}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: true,
      };

    case `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
}
