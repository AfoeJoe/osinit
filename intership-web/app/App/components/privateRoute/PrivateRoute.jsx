import * as React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { routes } from "../../utils/constants";

function PrivateRoute({ comp:Component, loginStatus, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        loginStatus ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{ pathname: routes.LOGIN, state: { from: props.location } }}
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
