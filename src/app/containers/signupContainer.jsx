import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../../redux/actions/signupAction';
import SignupComponent from '../components/signupComponent.jsx';


export class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      othernames: '',
      phonenumber: '',
    };
  }

    handleSignup = (event) => {
      console.log('submit me please');
      event.preventDefault();
      const {
        username,
        email,
        password,
        firstname,
        lastname,
        phonenumber,
        othernames,
      } = this.state;
      const { signupAction } = this.props;

      signupAction(
        username,
        firstname,
        lastname,
        othernames,
        email,
        password,
        phonenumber,
      );
    }

    handleChange = (event) => {
      this.setState({ [event.target.id]: event.target.value });
    }

    render() {
      console.log(this.state);
      const { signupErrors, signupResponse } = this.props;
      return (
          <div>
              <SignupComponent
                  signupErrors={signupErrors}
                  signupResponse={signupResponse}
                  handleChange={this.handleChange}
                  handleSignup={this.handleSignup}
                />
            </div>
      );
    }
}

export const mapStateToProps = state => ({
  signupErrors: state.signup.signupErrors,
  signupResponse: state.signup.signupResponse,
});

export default connect(
  mapStateToProps,
  { signupAction },
)(SignupContainer);
