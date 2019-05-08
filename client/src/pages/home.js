import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../utils/Auth/authContext";
import Login from "../components/authButtons/Login";
import PostsList from "../pages/PostsList"; /////////////REMEMBER TO CHANGE

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <h2>Welcome to React RBAC Tutorial.</h2>
          <Login />
          <PostsList />
        </div>
      )
    }
  </AuthConsumer>
);

export default HomePage;