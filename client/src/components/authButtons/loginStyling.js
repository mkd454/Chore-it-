import React from "react";
import "./login.css";
import Login from "./Login";

const LoginStyling = () => (
  <div className = "container-fluid">
    <div className = "row">
      <div className = "col-4"></div>
      <form className="m-4 p-4 col-4">
        <p className="h1 text-center mb-4" id="loginHeader">Login Here!</p>
      </form>
      <div className="col-4"></div>
    </div>
  </div>
);

export default LoginStyling
