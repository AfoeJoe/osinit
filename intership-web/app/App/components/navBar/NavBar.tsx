import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dispatch } from 'redux';

import { IActionType, IDispatchProps } from '../../../common';
import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import Logo from '../../resources/Logo.png';
import { routes } from '../../utils/constants';
import './navBar.css';

type IProps = {
  loginStatus: boolean;
};
function Navbar(props: IProps & IDispatchProps) {
  const { loginStatus, actions } = props;
  return (
    <>
      {loginStatus && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt=""
          />
          <NavLink className="nav-item" to={routes.ORGANIZATION}>
            Organizations
          </NavLink>
          <NavLink className="nav-item" to="/divisions/">
            Division
          </NavLink>
          <NavLink className="nav-item" to="/employees/">
            Employee
          </NavLink>
          <button
            onClick={actions.onLogout}
            className="btn btn-light my-2 my-sm-0"
          >
            Logout
          </button>
        </nav>
      )}
    </>
  );
}
function mapStateToProps(state: IStoreState) {
  return {
    loginStatus: state.Auth.loginStatus,
  };
}
function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
