import React, { Component } from 'react';
import API from "../../utils/API/API";

import TaskItem from '../taskitem';
import './style.css';


class TasksList extends Component {
  state = {
    tasks: [],
    taskForm: false,
    taskName: '',
    taskValue: '',
    userId: this.props.userId,
    needUpdate: false
  }

  componentWillMount() {
    API.getUserTasks(this.state.userId)
      .then(res => this.setState({
        tasks: res.data,
        needUpdate: false
      }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    console.log('update');
    if (this.state.needUpdate) {
      API.getUserTasks(this.state.userId)
        .then(res => {console.log(res);this.setState({
          tasks: res.data,
          needUpdate: false
        })})
        .catch(err => console.log(err));
    } else {
      return;
    }
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  taskFinished = (id) => {
    API.deleteTask(id)
      .then(res => API.getUserTasks(this.state.userId)
      .then(res => {
        console.log(res);
        this.setState({
        tasks: res.data,

      })}))
      .catch (err => console.error(err));
        
  }
      
  taskIncomplete = (id, amount) => {
    API.deleteTask(id)
    .then(res => API.getUserTasks(this.state.userId)
    .then(res => {
      console.log(res);
      this.setState({
        tasks: res.data
      })}))
      .catch (err => console.error(err));

      this.props.updateBalance(amount);
  }

  addTaskForm = (boolean) => {
    this.setState({
      taskForm: boolean,
      needUpdate: true
    });
  }

  addTask = (e) => {
    e.preventDefault();

    const taskData = {
      taskName: this.state.taskName,
      amount: this.state.taskValue,
      userId: this.state.userId
    }
    API.saveTask(taskData)
      .then(res => {
        this.setState({
          needUpdate: true,
          taskForm: false
        }); 
      })
      .catch(err => console.error(err));
  }

  renderContent = () => {
    if (this.state.tasks.length === 0 && !this.state.taskForm) {
      return (
        <div className="button-container">
          <h3>You have no tasks.</h3>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.addTaskForm(true)}>Add Task</button>
        </div>
      );
    } else if (this.state.taskForm) {
      return (
        <div className="form-container">
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input onChange={this.handleInputChange} name="taskName" value={this.state.taskName} type="text" className="form-control" placeholder="Wash dishes"/>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input onChange={this.handleInputChange} value={this.state.taskValue} name="taskValue" type="text" className="form-control" placeholder="Enter amount for task"/>
            </div>
            <div className="form-button-container">
              <button onClick={this.addTask} className="btn btn-primary">Submit</button>
              <button onClick={() => this.addTaskForm(false)} className="btn btn-primary">Back</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <ul className="list-group">
          {this.state.tasks.map(task => (
            <TaskItem
              key={task._id}
              id={task._id}
              name={task.taskName}
              amount={task.amount}
              taskFinished = {this.taskFinished}
              taskIncomplete = {this.taskIncomplete}
            />
            
          ))}
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.addTaskForm(true)}>Add Task</button>
        </ul>
      )
    }
  }

  render () {
    return (
      <div className="tasks-container">
        {this.renderContent()}
      </div>
    )
  }
}

export default TasksList;