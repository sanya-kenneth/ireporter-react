import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/actions/loginAction';
import LoginComponent from '../components/loginComponent.jsx';


export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

    handleLogin = (event) => {
      event.preventDefault();
      const {
        email,
        password,
      } = this.state;
      const { loginAction } = this.props;

      loginAction(
        email,
        password,
      );
    }

    handleChange = (event) => {
      this.setState({ [event.target.id]: event.target.value });
    }

    render() {
      const { loginErrors, loginResponse } = this.props;
      return (
          <div>
              <LoginComponent
                  loginErrors={loginErrors}
                  loginResponse={loginResponse}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                />
            </div>
      );
    }
}

export const mapStateToProps = state => ({
  loginErrors: state.login.loginErrors,
  loginResponse: state.login.loginResponse,
});

export default connect(
  mapStateToProps,
  { loginAction },
)(LoginContainer);
