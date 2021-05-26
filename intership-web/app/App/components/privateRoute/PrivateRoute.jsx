import * as React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../../utils/constants";

function PrivateRoute({ children, loginStatus, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginStatus ? (
          children
        ) : (
          <Redirect
            to={{ pathname: routes.LOGIN, state: { from: location } }}
          ></Redirect>
        )
      }
    />
  );
}
function mapStateToProps(state) {
  return {
    loginStatus: state.Auth.loginStatus,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
