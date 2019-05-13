import React, { Component } from "react";
import { TaskName, TaskValue, TaskBtn } from "../components/TaskForm/index"
import API from "../utils/API/API";
import {AuthConsumer} from "../utils/Auth/authContext";


class AddTask extends Component {
  state = {
    taskName: "",
    taskValue:""
  };

  componentDidMount() {
    this.loadTasks();
  };

  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ taskName: res.data }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      taskName: value,
      taskValue: value
    });
    console.log(this.state.taskValue);
    console.log(this.state.taskName);
  };

  handleFormSubmit = (event, id) => {
      console.log(id)
    event.preventDefault();
      API.saveTask({
        userId: id,
        name: this.state.taskName,
        value: this.state.taskValue
      })
        .then(res => this.loadTasks())
        .catch(err => console.log(err))
    }


  render() {
    return (
      <AuthConsumer>
        {({user}) => (
          <form>
            <h1>Name the Task:</h1>
            <TaskName 
              value={this.state.taskName}
              onChange={this.handleInputChange}
              type="text"
              name="taskName"
              placeholder="Name of the Task"
            />
            <h1>Value of the Task</h1>
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
