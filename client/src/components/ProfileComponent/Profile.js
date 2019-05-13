import React from "react";
import "./profile.css"
import API from "../utils/API/API";
import {AuthConsumer} from "../../utils/Auth/authContext";
import ProfileContainer from "../ProfileContainer/profilecontainer"

class Profile extends React.Component {
  state = {
    groupId: ""
  }

  componentDidMount(){
    console.log("Grabbing user data for profile page");
    console.log(this.props.user);
    API.getUser(this.props.user.id)
      .then(res => this.setState({ groupId:res.data[0].inGroup }))
      .catch(err => console.log(err));
  }

render () {
    {({user}) => (
      <div className="cardContainer">
        <div className="ProfileInformationContainer">
        <h2 className="profileHeader">Your Profile</h2>

          <ul className="profileInformationList">
            <li className="profileListDetail"><h5>Your Unique ID</h5><break/><p>{this.props.user.id}</p></li>
            <li className="profileListDetail"><h5>Username</h5><break/><p>{this.props.user.name}</p></li>
            <li className="profileListDetail"><h5>Email</h5><break/><p>{this.props.user.email}</p></li>
            <li className="profileListDetail"><h5>Group Id:</h5><break/><p>{this.state.groupId}</p></li>
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
  }
};

export default Profile;
