import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { IStoreState } from '../../../Reducers/Reducers';
import { routes } from '../../utils/constants';

/**
 * @props loginStatus - current login status, either true or false
 * @props comp - child component  which is being protected
 */
type IProps = {
  loginStatus: boolean;
  comp: any;
  [otherProps: string]: any;
};
/**
 * Private route component
 * @param props - takes in the login status and the child component and other optional props to be passed to the  child component
 * @returns either renders the requested page if logged in or redirects to the login page
 */
function PrivateRoute({ comp: Component, loginStatus, ...otherProps }: IProps) {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        loginStatus ? (
          <Component {...otherProps} {...props} />
        ) : (
          <Redirect
            to={{ pathname: routes.LOGIN, state: { from: props.location } }}
          ></Redirect>
        )
      }
    />
  );
}

/**
 * Maap state to props
 * @param state - from the store
 * @returns the loginStatus state from the store
 */
function mapStateToProps(state: IStoreState) {
  return {
    loginStatus: state.Auth.loginStatus,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
