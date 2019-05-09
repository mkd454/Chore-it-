import React from "react";

import {AuthConsumer} from "../utils/Auth/authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;