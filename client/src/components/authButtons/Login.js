import React from "react";
import { AuthConsumer } from "../../utils/Auth/authContext";
import LoginButton from "./practiceButton"
import "./login.css";

const Login = () => (
  <div id="flex">
    <p className="h1 text-center mb-4" id="loginHeader">Chore-It!</p>
        <LoginButton />
  </div>
);

export default Login;
