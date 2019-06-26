import React from 'react';
import '../../assets/css/signup.css';
import { Link } from 'react-router-dom';


export default function SignupComponent(props) {
  return (
    <>
      <div className="signup-back">
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <img className="logo" src="../../../src/assets/images/logo.png" />
            <div className="card signup-card">
              <form onSubmit={props.handleSignup}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="firstname"
                    id="firstname"
                    onChange={props.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="lastname"
                    id="lastname"
                    onChange={props.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="othernames"
                    id="othernames"
                    onChange={props.handleChange}
                    className="form-control"
                  />
                </div>
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
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={props.handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="phonenumber"
                    id="phonenumber"
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
                <button className="btn btn-primary">Signup</button>
                  <p>
                    Already have an account!
  
                  <Link to="/">Login</Link>
                  </p>
              </form>
            </div>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
    </>
      );
    }
