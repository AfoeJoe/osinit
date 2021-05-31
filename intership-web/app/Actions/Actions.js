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
          throw "server error";
        }
      })
      .then((response) => {
        if (response.isLogin) {
          this.dispatch({
            type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`,
          });
        } else {
          throw "login details errors";
        }
        return response.isLogin;
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
  toggleEdit = (data = {}) => {
    this.dispatch({ type: ModalActionTypes.EDIT, payload: data });
  };
  toggleDelete = (data) =>
    this.dispatch({ type: ModalActionTypes.DELETE, payload: data });

  /*ORGANIZATION ACTIONS*/
  getOrganizations = async () => {
    this.dispatch({
      type: `${ActionTypes.FETCH_ORG}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    await fetch("http://127.0.0.1:8080/organization", options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.FETCH_ORG}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
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
    if (orgData.id) {
      const keyWord = "EDIT_ORG";
      const method = "PUT";
      const url = `http://127.0.0.1:8080/organization/?id=${orgData.id}`;
    } else {
      const keyWord = "CREATE_ORG";
      const method = "POST";
      const url = `http://127.0.0.1:8080/organization`;
    }
    this.dispatch({ type: `${ActionTypes[keyWord]}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(orgData),
    };

    await fetch(url, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes[keyWord]}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes[keyWord]}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };

  deleteOrganization = async (id) => {
    this.dispatch({
      type: `${ActionTypes.DELETE_ORG}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };
    await fetch(`http://127.0.0.1:8080/organization/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
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

  /*DIVISION ACTIONS*/
  getDivisions = async (id = 0) => {
    if (!id) {
      return this.dispatch({
        type: `${ActionTypes.FETCH_DIV}${AsyncActionTypes.FAILURE}`,
        payload: "Error,No ID passed!",
      });
    }
    this.dispatch({
      type: `${ActionTypes.FETCH_DIV}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    await fetch(`http://127.0.0.1:8080/division/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.FETCH_DIV}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.FETCH_DIV}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };

  createDivision = async (divData) => {
    if (divData.id) {
      const keyWord = "EDIT_DIV";
      const method = "PUT";
      const url = `http://127.0.0.1:8080/division/?id=${divData.id}`;
    } else {
      const keyWord = "CREATE_DIV";
      const method = "POST";
      const url = `http://127.0.0.1:8080/division`;
    }
    this.dispatch({ type: `${ActionTypes[keyWord]}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(divData),
    };

    await fetch(url, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes[keyWord]}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes[keyWord]}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  deleteDivision = async (id) => {
    this.dispatch({
      type: `${ActionTypes.DELETE_DIV}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };
    await fetch(`http://127.0.0.1:8080/division/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.DELETE_DIV}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.DELETE_DIV}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };

  /*EMPLOYEE ACTIONS*/
  getEmployees = async (id_divsion = 0) => {
    if (!id_divsion) {
      return this.dispatch({
        type: `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.FAILURE}`,
        payload: "Error,No ID passed!",
      });
    }
    this.dispatch({
      type: `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    await fetch(`http://127.0.0.1:8080/employee/?id=${id_divsion}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };

  createEmployee = async (empData) => {
    if (empData.id) {
      const keyWord = "EDIT_EMPLOYEE";
      const method = "PUT";
      const url = `http://127.0.0.1:8080/employee/?id=${empData.id}`;
    } else {
      const keyWord = "CREATE_EMPLOYEE";
      const method = "POST";
      const url = `http://127.0.0.1:8080/employee`;
    }
    this.dispatch({ type: `${ActionTypes[keyWord]}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(empData),
    };

    await fetch(url, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes[keyWord]}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes[keyWord]}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  deleteEmployee = async (id) => {
    this.dispatch({
      type: `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };
    await fetch(`http://127.0.0.1:8080/employee/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw "error";
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.SUCCESS}`,
          });
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
}
