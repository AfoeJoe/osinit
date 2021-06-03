/**
 * Типы экшенов, используемые в приложении.
 * LOGIN - Авторизация.
 * LOGOUT - Отмена авторизации.
 * FETCH_ORG - Fetches the list of organizations .
 * CREATE_ORG - Creates an organizition
 * EDIT_ORG - Edits an organization
 * DELETE_ORG - Deletes an organization
 * FETCH_DIV - Fetches the list of divisions .
 * CREATE_DIV - Creates a division
 * EDIT_DIV - Edits a division
 * DELETE_DIV - Deletes a division
 * FETCH_EMPLOYEE - Fetches the list of employees .
 * CREATE_EMPLOYEE - Creates an employee
 * EDIT_EMPLOYEE - Edits an employee
 * DELETE_EMPLOYEE - Deletes an employee
 */
export enum ActionTypes {
  LOGIN = 'ACTION_LOGIN',
  LOGOUT = 'ACTION_LOGOUT',
  FETCH_ORG = 'ACTION_FETCH_ORG',
  CREATE_ORG = 'ACTION_CREATE_ORG',
  EDIT_ORG = 'ACTION_EDIT_ORG',
  DELETE_ORG = 'ACTION_DELETE_ORG',
  FETCH_DIV = 'ACTION_FETCH_DIV',
  CREATE_DIV = 'ACTION_CREATE_DIV',
  EDIT_DIV = 'ACTION_EDIT_DIV',
  DELETE_DIV = 'ACTION_DELETE_DIV',
  FETCH_EMPLOYEES = 'ACTION_FETCH_EMPLOYEES',
  CREATE_EMPLOYEE = 'ACTION_CREATE_EMPLOYEE',
  EDIT_EMPLOYEE = 'ACTION_EDIT_EMPLOYEE',
  DELETE_EMPLOYEE = 'ACTION_DELETE_EMPLOYEE',
}

/**
 * Modal Action Types.
 * EDIT - Изменить состояние  edit modal.
 * DELETE - Изменить состояние  delete modal.
 */
export enum ModalActionTypes {
  EDIT = 'TOGGLE_EDIT',
  DELETE = 'TOGGLE_DELETE',
}
/**
 * Подтипы для экшенов при ассинхронной работы.
 * BEGIN - Начало ассинхронного действия.
 * SUCCESS - Действие завершилось успешно.
 * FAILURE - Действие завершилось с ошибкой.
 */
export enum AsyncActionTypes {
  BEGIN = '_BEGIN',
  SUCCESS = '_SUCCESS',
  FAILURE = '_FAILURE',
}
