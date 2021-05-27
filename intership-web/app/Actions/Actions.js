import { Dispatch } from "redux";
//import {IActionType} from '../common';
import { ActionTypes, AsyncActionTypes, ModalActionTypes } from "./Consts";
//import {ILoginData} from './Models';

/**
 * Экшены для приложения.
 */
export class Actions {
  constructor(/*private*/ dispatch /*: Dispatch<IActionType>*/) {
    this.dispatch = dispatch;
  }

  /*AUTH ACTIONS*/
  onLogin = async (loginData /*: ILoginData*/) => {
    this.dispatch({ type: `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}` });

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(loginData),
    };
    await fetch("http://127.0.0.1:8080/authorize", options)
      .then((response) => {
        if (response.status === 200) {
          this.dispatch({
            type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`,
          });
        } else {
          throw "error";
        }
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };

  onLogout = () => {
    const options = {
      method: "POST",
    };
    fetch("http://127.0.0.1:8080/logout", options)
      .then((response) => {
        if (response.status === 200) {
          this.dispatch({ type: ActionTypes.LOGOUT });
        } else {
          throw "error";
        }
      })
      .catch(() => {
        this.dispatch({ type: ActionTypes.LOGOUT });
      });
  };

  /*MODAL ACTIONS*/
  toggleAdd = () => this.dispatch({ type: ModalActionTypes.ADD });
  toggleEdit = () => this.dispatch({ type: ModalActionTypes.EDIT });
  toggleDelete = () => this.dispatch({ type: ModalActionTypes.DELETE });

  /*ORGANIZATION ACTIONS*/
  getOrganizations = async (url, data = "") => {
    this.dispatch({ type: `${ActionTypes.FETCH}${AsyncActionTypes.BEGIN}` });
    const options = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    await fetch("http://127.0.0.1:8080/organization", options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then(data => {
          this.dispatch({
            type: `${ActionTypes.FETCH}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.FETCH}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
}
