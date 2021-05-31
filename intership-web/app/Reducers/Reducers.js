import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { History } from "history";
import ExampleReducer /*, { IExample } */ from "./ExampleReducer";
import AuthReducer from "./AuthReducer";
import ModalReducer from "./ModalReducer";
import OrganizationReducer from "./OrganizationReducer";
import DivisionReducer from "./DivisionReducer";
import EmployeeReducer from "./EmployeeReducer";

/**
 * @interface
 * @description интерфейс главного хранилища.
 */
/*export interface IStoreState {
    router: any
    Example: IExample
}*/

/**
 * Возвращает редьюсер.
 * @param {History} history
 */
const createRootReducer = (history /*: History*/) =>
  combineReducers(
    /*<IStoreState>*/ {
      router: connectRouter(history),
      Example: ExampleReducer,
      Auth: AuthReducer,
      Modal: ModalReducer,
      Organization: OrganizationReducer,
      Division: DivisionReducer,
      Employee: EmployeeReducer,
    }
  );

export default createRootReducer;
