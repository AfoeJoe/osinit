import {Dispatch} from 'redux';
//import {IActionType} from '../common';
import {ActionTypes, AsyncActionTypes} from './Consts';
//import {ILoginData} from './Models';

/**
 * Экшены для приложения.
 */
export class Actions {
    constructor(/*private*/ dispatch/*: Dispatch<IActionType>*/) {
        this.dispatch = dispatch

    }

    onClick = async (increment/*: number*/) => {
        //Простейший асинхронный экшен
        // setTimeout(() => {
        //   this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`});
        // }, 2000);

        this.dispatch({type: `${ActionTypes.CLICK}${AsyncActionTypes.BEGIN}`});
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.dispatch({type: `${ActionTypes.CLICK}${AsyncActionTypes.SUCCESS}`, payload: increment});
    };

    onLogin = async (loginData/*: ILoginData*/) => {
        this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.BEGIN}`});

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(loginData),
        };
        await fetch('http://127.0.0.1:8080/authorize', options)
            .then(response => {
                if (response.status === 200) {
                    this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.SUCCESS}`});
                } else {
                    throw 'error';
                }
            })
            .catch(error => {
                this.dispatch({type: `${ActionTypes.LOGIN}${AsyncActionTypes.FAILURE}`, payload: error});
            });
    };

    onLogout = () => {
        const options = {
            method: 'POST',
        };
        fetch('http://127.0.0.1:8080/logout', options)
        .then(response => {
            if (response.status === 200) {
                this.dispatch({type: ActionTypes.LOGOUT});
            } else {
                throw 'error';
            }
        })
        .catch(() => {
            this.dispatch({type: ActionTypes.LOGOUT});
        });
    }
}
