import React from "react";
import { AuthConsumer } from "../../utils/Auth/authContext";
import "./login.css";

const Login = () => (
  <div className = "container-fluid">
    <div className = "row">
      <div className = "col-4"></div>
      <div className="m-4 p-4 col-4">
        <p className="h1 text-center mb-4" id="loginHeader">Login Here!</p>
        <AuthConsumer>
          {({ initiateLogin }) => (
            <button id="loginButton" className="btn btn-sm btn-primary d-flex justify-content-center" onClick={initiateLogin}>
              Login
            </button>
          )}
        </AuthConsumer>
      </div>
      <div className="col-4"></div>
    </div>
  </div>
);

export default Login;
