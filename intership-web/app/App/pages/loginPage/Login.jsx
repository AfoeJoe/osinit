import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "../../components/customButton/CustomButton";
import InputField from "../../components/inputField/InputField";
import Logo from "../../resources/Logo.png";
import { routes } from "../../utils/constants";
import { Actions } from "../../../Actions/Actions";
import "./login.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    const { username, password } = this.state;
    const result = this.props.actions.onLogin({
      loginData: { login: username, password: password },
    });
    result.then(() => {
      if (this.props.loginStatus) {
        const from =
          (this.props.history.location.state &&
            this.props.history.location.state.from.pathname) ||
          routes.ORGANIZATION;
        this.props.history.push(from);
      }
    })
    e.preventDefault();
  }
  handleChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }
  render() {
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
              value={this.state.username}
            />
            <InputField
              id="inputPassword"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              type="password"
              label="Password"
              handleChange={this.handleChange}
              value={this.state.password}
            />
             {this.props.error && (
              <div className="alert alert-danger" role="alert">
                {this.props.error}{" Please, provide login details"}
              </div>
            )}
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>

            <Button
              type="submit"
              text="Sign In"
              className={`btn-primary btn-lg  btn-block`}
              disabled={this.props.waitingForLogin}
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
    error:state.Auth.error
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
