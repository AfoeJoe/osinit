import { ActionTypes, AsyncActionTypes } from "../Actions/Consts";

const initialState = {
  get state() {
    return {
      loading: false,
      employees: null,
      errors: "",
      reload: false,
    };
  },
};

export default function reducer(state = initialState.state, action) {
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
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
        errors: action.payload,
      };
  }
  return state;
}
