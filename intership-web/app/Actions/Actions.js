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
          return response.json();
          
        } else {
          throw "error";
        }
      }).then(response=>{
        console.log(response.isLogin);

        if (response.isLogin) {
          this.dispatch({
            type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`,
          });
        }else {
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
  toggleEdit = (data={}) => {this.dispatch({ type: ModalActionTypes.EDIT,payload:data })};
  toggleDelete = (data) => this.dispatch({ type: ModalActionTypes.DELETE,payload:data });

  /*ORGANIZATION ACTIONS*/
  getOrganizations = async (url, data = "") => {
    this.dispatch({ type: `${ActionTypes.FETCH_ORG}${AsyncActionTypes.BEGIN}` });
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
            type: `${ActionTypes.FETCH_ORG}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.FETCH_ORG}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  createOrganization = async (orgData) => {
    this.dispatch({ type: `${ActionTypes.CREATE_ORG}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(orgData),
    };
    await fetch("http://127.0.0.1:8080/organization", options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then(data => {
          this.dispatch({
            type: `${ActionTypes.CREATE_ORG}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.CREATE_ORG}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  editOrganization = async (orgData) => {
    this.dispatch({ type: `${ActionTypes.EDIT_ORG}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(orgData),
    };
    await fetch(`http://127.0.0.1:8080/organization/?id=${orgData.id}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then(data => {
          this.dispatch({
            type: `${ActionTypes.EDIT_ORG}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.EDIT_ORG}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  deleteOrganization = async (id) => {
    this.dispatch({ type: `${ActionTypes.DELETE_ORG}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };
    await fetch(`http://127.0.0.1:8080/organization/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then(data => {
          this.dispatch({
            type: `${ActionTypes.DELETE_ORG}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.DELETE_ORG}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
}
