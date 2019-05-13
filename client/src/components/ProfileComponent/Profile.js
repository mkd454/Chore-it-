import React from "react";
import "./profile.css";
import API from "../../utils/API/API"
import ProfileContainer from "../ProfileContainer/profilecontainer"

class Profile extends React.Component {
  state = {
    groupId: ""
  }

  componentDidMount(){
    API.getUser(this.props.user.id)
      .then(res => this.setState({ groupId:res.data[0].inGroup }))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <h2 className="profileHeader">Your Profile</h2>
        <div className="row">
          <div className="col-md-3">
            <h5>Your Unique ID</h5>
            <p id="user-id">{this.props.user.id}</p>
          </div>
          <div className="col-md-3">
            <h5>Username</h5>
            <p id="username">{this.props.user.name}</p>
          </div>
          <div className="col-md-3">
            <h5>Email</h5>
            <p id="user-email">{this.props.user.email}</p>
          </div>
          <div className="col-md-3">
            <h5>Group ID:</h5>
            <p id="user-group-id">{this.state.groupId}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Profile;
