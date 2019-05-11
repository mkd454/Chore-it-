import React from "react";
import API from "../utils/API/API";


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
    return (
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {this.props.user.id}</li>
          <li>Name: {this.props.user.name}</li>
          <li>Email: {this.props.user.email}</li>
          <li>Group Id: {this.state.groupId}</li>
        </ul>
      </div>
    )
  }
};


export default Profile;