/**
 * Типы экшенов, используемые в приложении.
 * LOGIN - Авторизация.
 * LOGOUT - Отмена авторизации.
 * CLICK - Подсчёт чего-либо для примера.
 */
/* export enum ActionTypes {
    LOGIN = 'ACTION_LOGIN',
    LOGOUT = 'ACTION_LOGOUT',
    CLICK = 'ACTION_CLICK',
}*/
export const ActionTypes = {
  LOGIN: "ACTION_LOGIN",
  LOGOUT: "ACTION_LOGOUT",
  FETCH_ORG: "ACTION_FETCH_ORG",
  CREATE_ORG: "ACTION_CREATE_ORG",
  EDIT_ORG: "ACTION_EDIT_ORG",
  DELETE_ORG: "ACTION_DELETE_ORG",
  FETCH_DIV: "ACTION_FETCH_DIV",
  CREATE_DIV: "ACTION_CREATE_DIV",
  EDIT_DIV: "ACTION_EDIT_DIV",
  DELETE_DIV: "ACTION_DELETE_DIV",
  FETCH_EMPLOYEES: "ACTION_FETCH_EMPLOYEES",
  CREATE_EMPLOYEE: "ACTION_CREATE_EMPLOYEE",
  EDIT_EMPLOYEE: "ACTION_EDIT_EMPLOYEE",
  DELETE_EMPLOYEE: "ACTION_DELETE_EMPLOYEE",
};
export const ModalActionTypes = {
  EDIT: "TOGGLE_EDIT",
  DELETE: "TOGGLE_DELETE",
};

/**
 * Подтипы для экшенов при ассинхронной работы.
 * BEGIN - Начало ассинхронного действия.
 * SUCCESS - Действие завершилось успешно.
 * FAILURE - Действие завершилось с ошибкой.
 */
/*export enum AsyncActionTypes {
    BEGIN = '_BEGIN',
    SUCCESS = '_SUCCESS',
    FAILURE = '_FAILURE',
}*/
export const AsyncActionTypes = {
  BEGIN: "_BEGIN",
  SUCCESS: "_SUCCESS",
  FAILURE: "_FAILURE",
};
