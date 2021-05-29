import * as React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../../utils/constants";
import { Actions } from "../../../Actions/Actions";
import Logo from "../../resources/Logo.png";
import './navBar.css'

function Navbar(props) {
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
              <NavLink className="nav-item" to='/divisions/'>
                Division
              </NavLink>
              <NavLink className="nav-item" to={routes.EMPLOYEES}>
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
function mapStateToProps(state) {
  return {
    loginStatus: state.Auth.loginStatus,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: new Actions(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
