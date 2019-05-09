import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../utils/Auth/authContext";
import Can from "../utils/Auth/Can";
import Logout from "../components/authButtons/Logout";
import TasksList from "../components/taskslist";

import Roommates from "../components/roommates";

class RoommateDetails extends Component {
  state = {
    id: 0,
    name: "",
    ownerId: "",
    image: "",
    description: ""
  }

  componentWillMount() {
    let roommate = Roommates.find(obj => {
      return obj.id === this.props.match.params.id;
    });

    this.setState({
      id: roommate.id,
      name: roommate.name,
      ownerId: roommate.ownerId,
      image: roommate.image,
      description: roommate.description
    });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="text-center col-md-4 offset-md-4">
            <img src={this.state.image} className="img-fluid rounded-circle profile-image" alt="profile image" />
            <h1>{this.state.name}</h1>
          </div>
          <hr className="my-4" />
          <p className="lead">{this.state.description}</p>
          <hr className="my-4" />
        </div>
        <TasksList userId={this.state.id}/>
      </div>
    )
  }
}

export default RoommateDetails;