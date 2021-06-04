import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IActionType, IDispatchProps, IHistory } from '../../../common';
import { Actions } from '../../../Actions/Actions';
import { IStoreState } from '../../../Reducers/Reducers';
import CustomButton from '../../components/customButton/CustomButton';
import InputField from '../../components/inputField/InputField';
import Logo from '../../resources/Logo.png';
import { routes } from '../../utils/constants';

import './login.css';

/**
 * @state username - holds the state of the username input field
 * @state password - holds the state of the password input field
 * @state stateError - holds the state of error generated during the filing of the form
 */
type MyState = {
  username: string;
  password: string;
  stateError: string;
};
/**
 * props from the store
 * @prop loginStatus - whether the user is logged in or not
 * @prop waitingForLogin - signif
 * @prop loginStatus - whether the user is logged in or not
 */
interface IStateProps {
  loginStatus: boolean;
  waitingForLogin: boolean;
  error: string;
}
/**Combined props */
type TProps = IStateProps & IDispatchProps & IHistory;

class LoginPage extends React.Component<TProps, MyState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      stateError: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ stateError: 'Please, fill in your login details' });
      return;
    }
    const result = this.props.actions.onLogin({
      login: username,
      password: password,
    });
    result
      .then((res) => {
        if (res.isLogin) {
          const from =
            (this.props.history.location.state &&
              this.props.history.location.state.from.pathname) ||
            routes.ORGANIZATION;
          this.props.history.push(from);
        }
      })
      .catch((error) => {
        this.setState({
          stateError: 'Please, fill in your login details' + error,
        });
      });
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    this.setState({ ...this.state, [name]: value });
  }
  render() {
    let { loginStatus, waitingForLogin, error } = this.props;
    const { password, stateError, username } = this.state;
    return (
      <div className="text-center">
        <div className="sign-in-body">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <img className="mb-4" src={Logo} alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <InputField
              id="inputUsername"
              name="username"
              placeholder="Username"
              autoComplete="username"
              type="text"
              label="User Name"
              handleChange={this.handleChange}
              value={username}
            />
            <InputField
              id="inputPassword"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              type="password"
              label="Password"
              handleChange={this.handleChange}
              value={password}
            />
            {(error || stateError) && (
              <div className="alert alert-danger" role="alert">
                {typeof error !== 'object' && error}
                {' try again'}
              </div>
            )}
            <CustomButton
              type="submit"
              text="Sign In"
              className={`btn-primary btn-lg  btn-block`}
              disabled={waitingForLogin || loginStatus}
            />
            <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState): IStateProps {
  return {
    loginStatus: state.Auth.loginStatus,
    waitingForLogin: state.Auth.loading,
    error: state.Auth.error,
  };
}

function mapDispatchToProps(dispatch: Dispatch<IActionType>): IDispatchProps {
  return {
    actions: new Actions(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
