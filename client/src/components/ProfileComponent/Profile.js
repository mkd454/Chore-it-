import React from "react";
import "./profile.css";
import API from "../../utils/API/API"
import ProfileContainer from "../ProfileContainer/profilecontainer"
import Logout from "../authButtons/Logout";

class Profile extends React.Component {
//   state = {
//     groupId: "",
//     balance: ""
//   }

//   componentDidMount(){
//     API.getUser(this.props.user.id)
//       .then(res => this.setState({ groupId:res.data[0].inGroup, balance: res.data[0].balance }))
//       .catch(err => console.log(err));
//   }

  render () {
    return (
      <div>
        <nav className="profileHeader navbar navbar-expand-lg">
          <h1 className="profileHeader navbar-brand">Your Profile</h1>
            <span className="navbar-text">
              <Logout />
            </span>
        </nav>
        <div className="row userInfo">
          <div className="col-md-4">
            <h5>Username</h5>
            <p id="username">{this.props.user.name}</p>
          </div>
          <div className="col-md-4">
            <h5>Balance: </h5>
            <p id="user-balance">${this.props.balance}</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Profile;
