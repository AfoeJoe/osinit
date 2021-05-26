import * as React from "react";
import Logo from "../../resources/Logo.png";
import { Link } from "react-router-dom";
import { routes } from "../../utils/constants";
import { connect } from "react-redux";
import { Actions } from "../../../Actions/Actions";

function Navbar(props) {
  const {loginStatus,actions}= props;

  return (
    <>
      {loginStatus && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between ">
          <Link className="navbar-brand" to={routes.ORGANIZATION}>
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt=""
            />
            Organizations
          </Link>
          <Link className="navbar-brand" to={routes.DIVISION}>
            Division 
          </Link>
          <Link className="navbar-brand" to={routes.EMPLOYEES}>
            Employee
          </Link>
          <button onClick={actions.onLogout} className="btn btn-light my-2 my-sm-0">
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
