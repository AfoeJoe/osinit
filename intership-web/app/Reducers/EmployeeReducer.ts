import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';
import { IEmployeeItem } from '../Actions/Models';

/**
 * employee Props from the store
 * @prop employees - either a list of returned employee data or null
 * @prop reload  -optional state,used to determine a refresh of the employee data
 * @prop loading - to signify a waiting request from the server
 * @prop error - optional state, holds the error state related to the action from the employee action creators
 */
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
/**
 * Employee reducer
 * @param state the initial employee state
 * @param action action object with type and payload as entries
 * @returns the new state after fetch,create,edit or delete actions
 */
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
