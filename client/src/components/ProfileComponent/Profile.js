import React from "react";
import "./profile.css"
import {AuthConsumer} from "../../utils/Auth/authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div class="flex">
        <div class="ProfileInformation">
        <h2 class="profileHeader">Your Profile</h2>
          <ul class="profile-information">
            <li>Your Unique ID: {user.id}</li>
            <li>ID: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;
