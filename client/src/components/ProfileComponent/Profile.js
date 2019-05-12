import React from "react";
import "./profile.css"
import {AuthConsumer} from "../../utils/Auth/authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div class="cardContainer">
        <div class="ProfileInformationContainer">
        <h2 class="profileHeader">Your Profile</h2>
          <ul class="profileInformationList">
            <li class="profileListDetail"><h5>Your Unique ID</h5><break/><p>{user.id}</p></li>
            <li class="profileListDetail"><h5>Username</h5><break/><p>{user.name}</p></li>
            <li class="profileListDetail"><h5>Email</h5><break/><p>{user.email}</p></li>
          </ul>
        </div>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;
