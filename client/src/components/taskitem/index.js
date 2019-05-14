import React, { Component } from 'react';
import API from '../../utils/API/API';
import './style.css';

class TaskItem extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    amount: this.props.amount
  }

  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {this.state.name}
          <div className="badge-container">
            <span className="badge badge-primary badge-pill">  ${this.state.amount}  </span>
            <span className="badge badge-danger" onClick={() => this.props.taskIncomplete(this.state.id, this.state.amount)}>✘</span>
            <span className="badge badge-success" onClick={() => this.props.taskFinished(this.state.id)}>✔</span>
          </div>
        </li>
      </div>
    )
  }
}

export default TaskItem;