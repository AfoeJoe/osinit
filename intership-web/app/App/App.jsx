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
import NoMatch from "./pages/noMatch/NoMatch";

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
          <PrivateRoute path={routes.ORGANIZATION} comp={OrganizationPage}/>
          <PrivateRoute exact path={routes.DIVISION} comp={DivisionPage}/>
          <PrivateRoute path={routes.EMPLOYEES} comp={EemployeePage}/ >
        
          <Route exact path={routes.HOME}>
            <LoginPage />
          </Route>
          <Route exact path={routes.LOGIN}>
            <LoginPage />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </>
    );
  }
}
