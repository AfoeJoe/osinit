import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { history } from '../Store/Store';
import NavBar from './components/navBar/NavBar';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import DivisionPage from './pages/divisionPage/DivisionPage';
import EemployeePage from './pages/employeePage/EemployeePage';
import LoginPage from './pages/loginPage/Login';
import NoMatch from './pages/noMatch/NoMatch';
import OrganizationPage from './pages/organizationPage/OrganizationPage';
import { routes } from './utils/constants';
import './App.css';

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
 * Основной класс приложенsия.
 */
export class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
        <Switch>
          <PrivateRoute path={routes.ORGANIZATION} comp={OrganizationPage} />
          <PrivateRoute path={routes.DIVISION} comp={DivisionPage} />
          <PrivateRoute path={routes.EMPLOYEES} comp={EemployeePage} />
          <Route exact path={routes.HOME}>
            <LoginPage history={history} />
          </Route>
          <Route path={routes.LOGIN}>
            <LoginPage history={history} />
          </Route>
          <Route path="*">
            <NoMatch history={history} />
          </Route>
        </Switch>
      </>
    );
  }
}
