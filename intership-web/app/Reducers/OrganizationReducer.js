import { ActionTypes, AsyncActionTypes } from "../Actions/Consts";

const initialState = {
  get state() {
    return {
      loading: false,
      organizations: null,
      errors: "",
      reload: false,
    };
  },
};

export default function reducer(state = initialState.state, action) {
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
      };
  }
  return state;
}
