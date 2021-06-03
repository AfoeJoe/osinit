import { IActionType } from '../common';
import { ModalActionTypes } from '../Actions/Consts';

/**
 * Modal Props from the store
 * @prop openEdit - add and edit modal state
 * @prop openDelete  - delete modal state
 * @prop editData  - data to be passed to the 'edit' modal, otherwise null for 'add' modal
 * @prop openDelete  - data to be passed to the  delete modal
 */
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
/**
 * Modal action creator
 * @param state - the initial modal states
 * @param action - action to be executed
 * @returns the modifed state in response to a particular action type
 */
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
