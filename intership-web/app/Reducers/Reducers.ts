import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import AuthReducer, { IAuth } from './AuthReducer';
import DivisionReducer, { IDivision } from './DivisionReducer';
import EmployeeReducer, { IEmployee } from './EmployeeReducer';
import ModalReducer, { IModal } from './ModalReducer';
import OrganizationReducer, { IOrganization } from './OrganizationReducer';

/**
 * @interface
 * @description интерфейс главного хранилища.
 */
export interface IStoreState {
  router: any;
  Auth: IAuth;
  Modal: IModal;
  Organization: IOrganization;
  Division: IDivision;
  Employee: IEmployee;
}

/**
 * Возвращает редьюсер.
 * @param {History} history
 */
const createRootReducer = (history: History) =>
  combineReducers<IStoreState>({
    router: connectRouter(history),
    Auth: AuthReducer,
    Modal: ModalReducer,
    Organization: OrganizationReducer,
    Division: DivisionReducer,
    Employee: EmployeeReducer,
  });

export default createRootReducer;
