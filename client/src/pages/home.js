// This is the login screen

import React from "react";
import { Redirect } from "react-router-dom";
import { AuthConsumer } from "../utils/Auth/authContext";
import Login from "../components/authButtons/Login";

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Login />
      )
    }
  </AuthConsumer>
);

export default HomePage;
