import React from "react";
import "./profile.css"
import {AuthConsumer} from "../../utils/Auth/authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div className="cardContainer">
        <div className="ProfileInformationContainer">
        <h2 className="profileHeader">Your Profile</h2>
          <ul className="profileInformationList">
            <li className="profileListDetail"><h5>Your Unique ID</h5><break/><p>{user.id}</p></li>
            <li className="profileListDetail"><h5>Username</h5><break/><p>{user.name}</p></li>
            <li className="profileListDetail"><h5>Email</h5><break/><p>{user.email}</p></li>
          </ul>
        </div>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;
