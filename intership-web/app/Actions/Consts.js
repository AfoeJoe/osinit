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
    LOGIN: 'ACTION_LOGIN',
    LOGOUT: 'ACTION_LOGOUT',
    FETCH_ORG: 'ACTION_FETCH_ORG',
    CREATE_ORG:'ACTION_CREATE_ORG',
    EDIT_ORG:'ACTION_EDIT_ORG',
    DELETE_ORG:'ACTION_DELETE_ORG',

}
export const ModalActionTypes = {
    EDIT: 'TOGGLE_EDIT',
    DELETE: 'TOGGLE_DELETE',
}

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
    BEGIN: '_BEGIN',
    SUCCESS: '_SUCCESS',
    FAILURE: '_FAILURE',
}