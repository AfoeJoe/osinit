import { ActionTypes, AsyncActionTypes } from "../Actions/Consts";

const initialState = {
  get state() {
    return {
      loading: false,
      divisions: null,
      errors: "",
      reload: false,
    };
  },
};

export default function reducer(state = initialState.state, action) {
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
      };
  }
  return state;
}
