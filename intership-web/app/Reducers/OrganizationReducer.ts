import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes } from '../Actions/Consts';
import { IOrganizationItem } from '../Actions/Models';

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
        reload: true,
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
        reload: true,
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
        reload: true,
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
