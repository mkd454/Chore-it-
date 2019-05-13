import React from "react";
import "./profile.css"
import {AuthConsumer} from "../../utils/Auth/authContext";
import ProfileContainer from "../ProfileContainer/profilecontainer"

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
          <ProfileContainer />
        </div>
        <div className="tasksContainer">
          <ul className="listContainer">
            <li className="listItem">Task 1</li>
            <li className="listItem">Task 1</li>
          </ul>
        </div>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;
