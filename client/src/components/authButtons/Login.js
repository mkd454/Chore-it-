import React from "react";
import LoginButton from "./LoginButton"
import "./login.css";

const Login = () => (
  <div id="flex">
    <p className="h1 text-center mb-4" id="loginHeader">Chore-It!</p>
    <p className="slogan">Wage Chores Not Wars</p>
    <LoginButton >Login</LoginButton>
  </div>
);

export default Login;
