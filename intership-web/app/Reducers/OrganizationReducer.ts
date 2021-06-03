import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';
import { IOrganizationItem } from '../Actions/Models';

/**
 * Organization Props from the store
 * @prop organizations - either a list of returned organization data or null
 * @prop reload  -Optional state,used to determine a refresh of the organization data
 * @prop loading - to signify a waiting request from the server
 * @prop error - optional state, holds the error state related to the action from the organization action creators
 */
export interface IOrganization {
  loading: boolean;
  organizations: IOrganizationItem[] | null;
  error?: string;
  reload?: boolean;
}

const initialState = {
  get state(): IOrganization {
    return {
      loading: false,
      organizations: null,
      error: '',
      reload: false,
    };
  },
};

/**
 * Organization reducer
 * @param state the initial organization state
 * @param action action object with type and payload as entries
 * @returns the new state after fetch,create,edit or delete actions
 */
export default function reducer(
  state: IOrganization = initialState.state,
  action: IActionType
) {
  switch (action.type) {
    case `${ActionTypes.FETCH_ORG}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.FETCH_ORG}${AsyncActionTypes.SUCCESS}`:
      return {
        organizations: action.payload,
        loading: false,
      };

    case `${ActionTypes.FETCH_ORG}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.CREATE_ORG}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.CREATE_ORG}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: !state.reload,
      };

    case `${ActionTypes.CREATE_ORG}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.EDIT_ORG}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.EDIT_ORG}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: !state.reload,
      };

    case `${ActionTypes.EDIT_ORG}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case `${ActionTypes.DELETE_ORG}${AsyncActionTypes.BEGIN}`:
      return {
        ...state,
        loading: true,
      };
    case `${ActionTypes.DELETE_ORG}${AsyncActionTypes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        reload: !state.reload,
      };

    case `${ActionTypes.DELETE_ORG}${AsyncActionTypes.FAILURE}`:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
