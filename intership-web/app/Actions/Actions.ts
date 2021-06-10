import { Dispatch } from 'redux';
import { IActionType } from '../common';
import { ActionTypes, AsyncActionTypes, ModalActionTypes } from './Consts';
import {
  IDivisionItem,
  IEmployeeItem,
  ILoginData,
  IOrganizationItem,
} from './Models';

/**
 * Экшены для приложения.
 */
export class Actions {
  constructor(private dispatch: Dispatch<IActionType>) {}

  /**
   * onLogin
   * @param loginData - {name: name,password:password}
   * @returns a promise object {isLogin : true | false}
   */
  onLogin = async (loginData: ILoginData): Promise<{ isLogin: boolean }> => {
    let returnValue;
    this.dispatch({ type: `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}` });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ loginData: loginData }),
    };
    await fetch('http://127.0.0.1:8080/authorize', options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw 'server error';
        }
      })
      .then((res) => {
        returnValue = res;
        if (returnValue.isLogin) {
          this.dispatch({
            type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`,
          });
        } else {
          throw 'login details errors';
        }
      })
      .catch((error) => {
        this.dispatch({
          type: `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
    return returnValue;
  };

  /**
   * onSubsequentLogin - this is called as the app launches to check for auth persistence.
   */
  onSubsequentLogin = (): void => {
    this.dispatch({
      type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`,
    });
  };
  /**
   * onLogout
   * @return - void
   */
  onLogout = () => {
    const options = {
      method: 'POST',
    };
    fetch('http://127.0.0.1:8080/logout', options)
      .then((response) => {
        if (response.status === 200) {
          this.dispatch({ type: ActionTypes.LOGOUT });
        } else {
          throw 'error';
        }
      })
      .catch(() => {
        this.dispatch({ type: ActionTypes.LOGOUT });
      });
    localStorage.clear();
  };

  /**
   * toggleEdit - dispatches the add|edit action
   * @param data - null | object of (organization | division | employee)
   */
  toggleEdit = (data = {}) => {
    this.dispatch({ type: ModalActionTypes.EDIT, payload: data });
  };
  /**
   * toggleDelete - dispatches the add|delete action
   * @param data - null | object of (organization | division | employee)
   */
  toggleDelete = (
    data: IDivisionItem | IEmployeeItem | IOrganizationItem | null
  ) => this.dispatch({ type: ModalActionTypes.DELETE, payload: data });

  /*ORGANIZATION ACTIONS*/
  getOrganizations = async () => {
    this.dispatch({
      type: `${ActionTypes.FETCH_ORG}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    await fetch('http://127.0.0.1:8080/organization', options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
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
  /**
   * sendOrganization -  adds organization. If orgData.id is passed,it updates the  organization
   * @param orgData - Data to be updated
   */
  sendOrganization = async (orgData: IOrganizationItem) => {
    let keyWord: string, method: string, url: string;
    if (orgData.id) {
      keyWord = ActionTypes.EDIT_ORG;
      method = 'PUT';
      url = `http://127.0.0.1:8080/organization/?id=${orgData.id}`;
    } else {
      keyWord = ActionTypes.CREATE_ORG;
      method = 'POST';
      url = `http://127.0.0.1:8080/organization`;
    }
    this.dispatch({ type: `${keyWord}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(orgData),
    };

    await fetch(url, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
        response.json().then((data) => {
          this.dispatch({
            type: `${keyWord}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          this.getOrganizations();
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${keyWord}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };

  deleteOrganization = async (id: number) => {
    this.dispatch({
      type: `${ActionTypes.DELETE_ORG}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };
    await fetch(`http://127.0.0.1:8080/organization/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.DELETE_ORG}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          this.getOrganizations();
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
  getDivisions = async (id: number) => {
    this.dispatch({
      type: `${ActionTypes.FETCH_DIV}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    await fetch(`http://127.0.0.1:8080/division/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
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
  /**
   * sendDivision -  adds a division. If divData.id is passed,it updates the  division
   * @param divData - Data to be updated
   */
  sendDivision = async (divData: IDivisionItem) => {
    let keyWord: string, method: string, url: string;

    if (divData.id) {
      keyWord = ActionTypes.EDIT_DIV;
      method = 'PUT';
      url = `http://127.0.0.1:8080/division/?id=${divData.id}`;
    } else {
      keyWord = ActionTypes.CREATE_DIV;
      method = 'POST';
      url = `http://127.0.0.1:8080/division`;
    }
    this.dispatch({ type: `${keyWord}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(divData),
    };

    await fetch(url, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
        response.json().then((data) => {
          this.dispatch({
            type: `${keyWord}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          this.getDivisions(divData.id_organization);
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${keyWord}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  deleteDivision = async (id: number, id_organization: number) => {
    this.dispatch({
      type: `${ActionTypes.DELETE_DIV}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };
    await fetch(`http://127.0.0.1:8080/division/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.DELETE_DIV}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          this.getDivisions(id_organization);
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
  getEmployees = async (id_divsion: number) => {
    this.dispatch({
      type: `${ActionTypes.FETCH_EMPLOYEES}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };

    await fetch(`http://127.0.0.1:8080/employee/?id=${id_divsion}`, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
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
  /**
   * sendEmployee -  adds an employee. If empData.id is passed,it updates the  employee
   * @param empData - Data to be updated
   */
  sendEmployee = async (empData: IEmployeeItem) => {
    let keyWord: string, method: string, url: string;

    if (empData.id) {
      keyWord = ActionTypes.EDIT_EMPLOYEE;
      method = 'PUT';
      url = `http://127.0.0.1:8080/employee/?id=${empData.id}`;
    } else {
      keyWord = ActionTypes.CREATE_EMPLOYEE;
      method = 'POST';
      url = `http://127.0.0.1:8080/employee`;
    }
    this.dispatch({ type: `${keyWord}${AsyncActionTypes.BEGIN}` });
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(empData),
    };

    await fetch(url, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
        response.json().then((data) => {
          this.dispatch({
            type: `${keyWord}${AsyncActionTypes.SUCCESS}`,
            payload: data,
          });
          this.getDivisions(empData.id_division);
          return data;
        });
      })
      .catch((error) => {
        this.dispatch({
          type: `${keyWord}${AsyncActionTypes.FAILURE}`,
          payload: error,
        });
      });
  };
  deleteEmployee = async (id: number, id_division: number) => {
    this.dispatch({
      type: `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.BEGIN}`,
    });
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    };
    await fetch(`http://127.0.0.1:8080/employee/?id=${id}`, options)
      .then((response) => {
        if (response.status !== 200) throw 'error';
        response.json().then((data) => {
          this.dispatch({
            type: `${ActionTypes.DELETE_EMPLOYEE}${AsyncActionTypes.SUCCESS}`,
          });
          this.getDivisions(id_division);
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
