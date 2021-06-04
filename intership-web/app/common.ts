import { History } from 'history';
import { Action } from 'redux';
import { Actions } from './Actions/Actions';

/**
 * Вид используемых экшенов.
 * @prop {string} type Тип экшена.
 * @prop {any} [payload] Дополнительная информация для экшена.
 */
export interface IActionType extends Action {
  type: string;
  payload?: any;
}

export interface IDispatchProps {
  actions: Actions;
}
/**
 * @props history - application navigation history from history library
 */
export interface IHistory {
  history: History;
}
