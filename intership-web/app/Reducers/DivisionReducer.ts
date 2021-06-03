import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';
import { IDivisionItem } from '../Actions/Models';

/**
 * Division Props from the store
 * @prop Division  - either a list of returned Division data or null
 * @prop reload  -Optional state,used to determine a refresh of the Division data
 * @prop loading - to signify a waiting request from the server
 * @prop error - optional state, holds the error state related to the action from the Division action creators
 */
export interface IDivision {
  loading: boolean;
  divisions: null | IDivisionItem[];
  error?: string;
  reload?: boolean;
}
const initialState = {
  get state(): IDivision {
    return {
      loading: false,
      divisions: null,
      error: '',
      reload: false,
    };
  },
};
/**
 * Division reducer
 * @param state the initial division state
 * @param action action object with type and payload as entries
 * @returns the new state after fetch,create,edit or delete actions
 */
export default function reducer(
  state: IDivision = initialState.state,
  action: IActionType
) {
  switch (action.type) {
    case `${ActionTypes.FETCH_DIV}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.FETCH_DIV}${AsyncActionTypes.SUCCESS}`:
      return {
        divisions: action.payload,
        loading: false,
      };

    case `${ActionTypes.FETCH_DIV}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.CREATE_DIV}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.CREATE_DIV}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: true,
      };

    case `${ActionTypes.CREATE_DIV}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.EDIT_DIV}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.EDIT_DIV}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: true,
      };

    case `${ActionTypes.EDIT_DIV}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.DELETE_DIV}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.DELETE_DIV}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: true,
      };

    case `${ActionTypes.DELETE_DIV}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
}
