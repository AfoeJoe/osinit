import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "./App.css";
import LoginPage from "./pages/loginPage/Login";
import { routes } from "./utils/constants";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


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

  /**
   * Обработчик авторизации пользователя.
   */

  /**
   * Обработчик выхода из системы.
   */

  render() {
    return (
      <Router>
 

          {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
          <Switch>
            {/* <Route path={routes.ORGANIZATION} component={OrganizationPage}/> */}

            <Route exact path={routes.HOME}>
              <LoginPage />
            </Route>
            <Route exact path={routes.LOGIN}>
              <LoginPage />
            </Route>
          </Switch>
      </Router>
    );
  }
}


const connectApp = connect(null, null)(App);

export { connectApp as App };
