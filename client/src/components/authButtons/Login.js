import React from "react";
import { AuthConsumer } from "../../utils/Auth/authContext";
import "./login.css";

const Login = () => (
  <div id="LoginPage"className = "container-fluid">
    <div className = "row">
      <div className = "col-2 col-lg-4 col-md-2"></div>
      <div className="col-8 col-lg-4 col-md-8">
        <p className="h1 text-center mb-4 m-4" id="loginHeader">Chore-It!</p>
        <AuthConsumer>
          {({ initiateLogin }) => (
            <button id="loginButton" className="btn btn-block btn-lg btn-primary d-flex justify-content-center pr-5 pl-5" onClick={initiateLogin}>
              Login
            </button>
          )}
        </AuthConsumer>
      </div>
      <div className="col-2 col-lg-4 col-md-2"></div>
    </div>
  </div>
);

export default Login;
