import { ModalActionTypes } from "../Actions/Consts";

const initialState = {
  get state() {
    return {
      openEdit: false,
      openDelete: false,
      openAdd: false,
    };
  },
};
export default function reducer(state = initialState.state, action) {
  switch (action.type) {
    case `${ModalActionTypes.ADD}`:
      return {
        ...state,
        openAdd: !state.openAdd,
      };
    case `${ModalActionTypes.EDIT}`:
      return {
        ...state,
        openEdit: !state.openEdit,
      };
    case `${ModalActionTypes.DELETE}`:
      return {
        ...state,
        openDelete: !state.openDelete,
      };
  }
  return state;
}
