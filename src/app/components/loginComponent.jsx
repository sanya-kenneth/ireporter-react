import React from 'react';
import '../../assets/css/signup.css';
import { Link } from 'react-router-dom';


export default function LoginComponent(props) {
  return (
    <>
      <div className="signup-back">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <img className="logo" src="../../../src/assets/images/logo.png" />
            <div className="card signup-card">
              <form onSubmit={props.handleLogin}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    onChange={props.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={props.handleChange}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary">Login</button>
              </form>
              <p>
                Don't have an account!
                <Link to="/signup">Signup</Link>
                {' '}
              </p>
            </div>
          </div>
          <div className="col-md-4" />
        </div>
      </div>
    </>
  );
}
