import { IActionType } from '../common';
import { ModalActionTypes } from '../Actions/Consts';

export interface IModal {
  openEdit: boolean;
  openDelete: boolean;
  editData: any;
  deleteData: any;
}
const initialState = {
  get state(): IModal {
    return {
      openEdit: false,
      openDelete: false,
      editData: null,
      deleteData: null,
    };
  },
};
export default function reducer(
  state: IModal = initialState.state,
  action: IActionType
) {
  switch (action.type) {
    case `${ModalActionTypes.EDIT}`:
      return {
        ...state,
        openEdit: !state.openEdit,
        editData: action.payload,
      };
    case `${ModalActionTypes.DELETE}`:
      return {
        ...state,
        openDelete: !state.openDelete,
        deleteData: action.payload,
      };
  }
  return state;
}
