import React from 'react';
import './styles/Landing.css';
import 'materialize-social/materialize-social.css';

const Landing = () => {
  return (
    <div className="container">
      <div className="row innerDiv">

        <div className="col s6 offset-s3 z-depth-1" id="panell">
          <h5 id="title">QuMania Login</h5>

          <div className="col s12 addSpace">
            <a href="/auth/google" className="waves-effect waves-light btn col s12 social google">
              <i className="fa fa-google"></i> Login with Google+
              </a>
          </div>
          <div className="col s12 addSpace">
            <a class="waves-effect waves-light btn col s12 social facebook">
              <i class="fa fa-facebook"></i> Sign in with facebook</a>
          </div>
          <div className="col s12 addSpace">
            <a class="waves-effect waves-light btn col s12 social twitter">
              <i class="fa fa-twitter"></i> Sign in with twitter</a>
          </div>

          <div className="section" />
          <div className="section" />
          <div className="section" />
          <div className="section" />

          <form>
            <div className="input-field" id="username">
              <input type="text" className="validate" />
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field" id="password">
              <input type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
            <p>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" id="checkbox" >Remember me</label>
            </p>
            <a className="waves-effect waves-light btn" id="loginBtn">Login</a>
            <a className="waves-effect waves-light btn" id="withoutLoginBtn">Continue Without Login</a>
          </form>

          <div className="section" />
          <div className="col s12" id="createAccount">
            <p className="message"><a href="#">Forgot Password?</a></p>
          </div>
          <div className="col s12" id="forgotPassword">
            <p className="message">Not registered? <a href="#">Sign Up</a></p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Landing;
