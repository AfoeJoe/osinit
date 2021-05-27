import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Switch, Route } from "react-router-dom";
import { IActionType } from "../common";
import { Actions } from "../Actions/Actions";
import { IStoreState } from "../Reducers/Reducers";
import "./App.css";
import LoginPage from "./pages/loginPage/Login";
import { routes } from "./utils/constants";
import OrganizationPage from "./pages/organizationPage/OrganizationPage";
import NavBar from "./components/navBar/NavBar";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import DivisionPage from "./pages/divisionPage/DivisionPage";
import EemployeePage from "./pages/employeePage/EemployeePage";

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
export class App extends React.Component /*<TProps, {}> */ {

  render() {
    return (
        <>
          <NavBar />
          {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
          <Switch>
            <PrivateRoute path={routes.ORGANIZATION}>
              <OrganizationPage />
            </PrivateRoute>
            <PrivateRoute path={routes.DIVISION}>
              <DivisionPage />
            </PrivateRoute>
            <PrivateRoute path={routes.EMPLOYEES}>
              <EemployeePage />
            </PrivateRoute>
            <Route exact path={routes.HOME}>
              <LoginPage />
            </Route>
            <Route exact path={routes.LOGIN}>
              <LoginPage />
            </Route>
          </Switch>
        </>
    );
  }
}
