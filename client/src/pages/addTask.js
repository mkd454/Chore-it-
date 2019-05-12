import React, { Component } from "react";
import { TaskName, TaskBtn } from "../components/GroupForm/index"
import API from "../utils/API/API";
import {AuthConsumer} from "../utils/Auth/authContext";

class AddTask extends Component {
  state = {
    taskName: ""
    taskValue:""
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
      taskName: value
    });
  };

  handleFormSubmit = (event, id) => {
    console.log(id);
    event.preventDefault();
      API.saveTask({
        name: this.state.taskName,
        value: this.state.taskValue
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <form>
            <h1>Please choose a name for your group:</h1>
            <TaskName 
              value={this.state.taskName}
              onChange={this.handleInputChange}
              type="text"
              name="taskName"
              placeholder="Name of the Task"
            />
            <TaskValue 
              value={this.state.taskValue}
              onChange={this.handleInputChange}
              type="text"
              name="taskValue"
              placeholder="Value of the Task"
            />
            <TaskBtn
              onClick={event => this.handleFormSubmit(event, user.id)}
            >
              Submit
            </TaskBtn>
          </form>)
        }
      </AuthConsumer>
    )
  }
}

export default AddTask;
