import React from "react";
import "./profile.css";
import Logout from "../authButtons/Logout";

const styles = {
  h1: {
    paddingBottom: 20
  }
}

class Profile extends React.Component {
  render () {
    return (
      <div className="userInfo">
        <div className="row">
          <div className="col-12 text-center">
            <h1 style={styles.h1}>Your Profile</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <h5>Username</h5>
            <p id="username">{this.props.user.name}</p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Balance: </h5>
            <span id="user-balance">${this.props.balance}&nbsp;&nbsp;<button onClick={() => this.props.updateBalance(this.props.balance)}>Paid!</button></span>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <Logout />
          </div>
        </div>
      </div>
    )
  }
};

export default Profile;
