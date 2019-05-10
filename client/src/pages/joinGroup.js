import React, { Component } from "react";
import { GroupName, GroupNameBtn } from "../components/GroupForm/index"
import API from "../utils/API/API";
import {AuthConsumer} from "../utils/Auth/authContext";

class JoinGroup extends Component {
  state = {
    groupId: ""
  };

  componentDidMount() {
    this.loadGroups();
  };

  loadGroups = () => {
    API.getGroups()
      .then(res =>
        this.setState({ groupId: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      groupId: value
    });
  };

  handleFormSubmit = (event, id) => {
    console.log(id);
    event.preventDefault();
    if (this.state.groupId) {
      API.saveGroup({
        name: this.state.groupId,
      }, id)
        .then(res => this.loadGroups())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <form>
            <h1>Please input the Group Id that you would like to join:</h1>
            <GroupName 
              value={this.state.groupId}
              onChange={this.handleInputChange}
              type="text"
              name="groupId"
              placeholder="Group Id (required)"
            />
            <GroupNameBtn
              // disabled={!(this.state.)}
              onClick={event => this.handleFormSubmit(event, user.id)}
            >
              Submit
            </GroupNameBtn>
          </form>)
        }
      </AuthConsumer>
    )
  }
}

export default JoinGroup;
