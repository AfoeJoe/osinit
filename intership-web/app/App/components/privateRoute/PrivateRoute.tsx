import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { IStoreState } from '../../../Reducers/Reducers';
import { routes } from '../../utils/constants';

type IProps = {
  loginStatus: boolean;
  comp: any;
  [otherProps: string]: any;
};

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
function mapStateToProps(state: IStoreState) {
  return {
    loginStatus: state.Auth.loginStatus,
  };
}

export default connect(mapStateToProps, null)(PrivateRoute);
