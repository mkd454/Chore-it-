import React, { Component } from "react";
import { GroupName, GroupNameBtn } from "../components/GroupForm/index"
import API from "../utils/API/API";

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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.groupName);  
    if (this.state.groupName) {
      API.saveGroup({
        name: this.state.groupName,
      })
        .then(res => this.loadGroups())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
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
            // disabled={!(this.state.)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </GroupNameBtn>
        </form>
      </div>
    )
  }
}

export default CreateGroup;
