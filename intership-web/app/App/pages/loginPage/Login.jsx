import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../components/customButton/CustomButton';
import InputField from '../../components/inputField/InputField';
import Logo from '../../resources/Logo.png';
import { routes } from '../../utils/constants';
import { Actions } from '../../../Actions/Actions';
import './login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      stateError: '',
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ stateError: 'Please, fill in your login details' });
      return;
    }
    try {
      const result = this.props.actions.onLogin({
        loginData: { login: username, password: password },
      });
      result
        .then(() => {
          if (this.props.loginStatus) {
            const from =
              (this.props.history.location.state &&
                this.props.history.location.state.from.pathname) ||
              routes.ORGANIZATION;
            this.props.history.push(from);
          }
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      this.setState({ stateError: 'Please, fill in your login details' });
      console.log(error);
    }

    e.preventDefault();
  }
  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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
            <Button
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

function mapStateToProps(state) {
  return {
    loginStatus: state.Auth.loginStatus,
    waitingForLogin: state.Auth.loading,
    error: state.Auth.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: new Actions(dispatch),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
