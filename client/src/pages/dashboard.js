 // This has all of the lego dudes

import React from "react";
import { Redirect } from "react-router-dom";
// import Card from "../components/Welcome-Card/index"
import CreateGroup from "../pages/createGroup"

import { AuthConsumer } from "../utils/Auth/authContext";
import Can from "../utils/Auth/Can";
import Logout from "../components/authButtons/Logout";
import Profile from "../pages/profile";

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <Profile />
            <Logout />
            <CreateGroup />
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;
