import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';

import { IActionType, IDispatchProps } from '../common';
import { Actions } from '../Actions/Actions';
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
 * Main application class
 * It houses the layout of the app (Navbar + the list of routes/protected routes)
 */
export class App extends React.Component<IDispatchProps, {}> {
  constructor(props: IDispatchProps) {
    super(props);
    /**Check if local storage contains login status */
    const isSet = localStorage.getItem('rememberMe');
    if (isSet === 'true' && localStorage.getItem('isLoggedIn') === 'true') {
      this.props.actions.onSubsequentLogin();
    }
  }
  render() {
    return (
      <>
        <NavBar />
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

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
  };
}

export default connect(null, mapDispatchToProps)(App);
