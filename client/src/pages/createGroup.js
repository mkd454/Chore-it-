import React, { Component } from "react";
import { GroupName, GroupNameBtn } from "../components/GroupForm/index"
import API from "../utils/API/API";
import {AuthConsumer} from "../utils/Auth/authContext";

class CreateGroup extends Component {
  state = {
    groupName: ""
  };

  componentDidMount() {
    this.loadGroups();
  };

  loadGroups = () => {
    API.getGroups()
      .then(res =>
        this.setState({ groupName: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      groupName: value
    });
  };

  handleFormSubmit = (event, id) => {
    console.log(id);
    event.preventDefault();
    if (this.state.groupName) {
      API.saveGroup({
        name: this.state.groupName,
      }, id)
        .then(res => 
          API.updateGroup(res.data.dbModel._id,res.data.dbUser._id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err)))
          // API.getGroup(res.data.dbModel._id)
          //   .then(res => console.log(res.data))
          //   .catch(err => console.log(err)))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <form>
            <h1>Please choose a name for your group:</h1>
            <GroupName 
              value={this.state.groupName}
              onChange={this.handleInputChange}
              type="text"
              name="groupName"
              placeholder="Group Name (required)"
            />
            <GroupNameBtn
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

export default CreateGroup;
