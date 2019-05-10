 // This has all of the lego dudes

import React from "react";
import { Redirect } from "react-router-dom";
import Card from "../components/Welcome-Card/index"

import { AuthConsumer } from "../utils/Auth/authContext";
import Can from "../utils/Auth/Can";
import Logout from "../components/authButtons/Logout";
import Profile from "../pages/profile";
import PostsList from "../pages/PostsList"; /////////////REMEMBER TO CHANGE

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <Profile />
            <Card />
            <Logout />
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;
