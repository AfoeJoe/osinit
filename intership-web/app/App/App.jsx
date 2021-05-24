import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "./App.css";

/**
 * Пропсы компонента из стора.
 * @prop {boolean} loginStatus Состояние зарегистрированности пользователя.
 * @prop {boolean} waitingForLogin Ожидание завершения процедуры авторизации (завершение логина).
 * @prop {boolean} countResult Результат вычисления.
 * @prop {boolean} counting Выполнение вычисления.
 */
// interface IStateProps{
//     loginStatus: boolean;
//     waitingForLogin: boolean;
//     countResult: number;
//     counting: boolean;
// }

/**
 * Пропсы для передачи экшенов.
 * @prop {Actions} actions Экшены для работы приложения.
 */
// export interface IDispatchProps{
//     actions: Actions;
// }

/**
 * Итоговые пропсы компонента
 */
// type TProps = IStateProps & IDispatchProps;

/**
 * Основной класс приложения.
 */
class App extends React.Component /*<TProps, {}> */ {
  /**
   * Обработчик запуска вычисления.
   */
  handleClick = () => this.props.actions.onClick(2);

  /**
   * Обработчик авторизации пользователя.
   */
  handleLogin = () =>
    this.props.actions.onLogin({
      loginData: { login: "user", password: "123" }
    });
  /**
   * Обработчик выхода из системы.
   */
  handleLogout = () => this.props.actions.onLogout();

  render() {
    const { loginStatus, waitingForLogin, countResult, counting } = this.props;
    return (
      <div>
        <h3>Boilerplate</h3>
        {waitingForLogin ? (
          <p>Авторизация...</p>
        ) : loginStatus ? (
          <p>Login success</p>
        ) : (
          <p>Logged out</p>
        )}
        <input
          className="btn btn-outline-secondary"
          disabled={waitingForLogin}
          type="button"
          value="+"
          onClick={this.handleClick}
        />
        <input
          className="btn btn-outline-primary"
          disabled={waitingForLogin}
          type="button"
          value="login"
          onClick={this.handleLogin}
        />
        <input
          className="btn btn-outline-warning"
          disabled={waitingForLogin || counting}
          type="button"
          value="logout"
          onClick={this.handleLogout}
        />
        {counting && <p>Подсчет...</p>}
        {!counting && countResult > 0 && (
          <p className="red-color">{countResult}</p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state/*: IStoreState*/)/*: IStateProps */{
  return {
    loginStatus: state.Example.loginStatus,
    waitingForLogin: state.Example.loading,
    countResult: state.Example.counter,
    counting: state.Example.counterIsLoading
  };
}

function mapDispatchToProps(dispatch/*: Dispatch<IActionType>*/)/*: IDispatchProps*/ {
  return {
    actions: new Actions(dispatch)
  };
}

const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { connectApp as App };
