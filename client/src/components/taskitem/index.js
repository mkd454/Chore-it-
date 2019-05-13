import React, { Component } from 'react';

class TaskItem extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    amount: this.props.amount
  }

  render() {
    return (
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {this.state.name}
        <span class="badge badge-primary badge-pill">${this.state.amount}</span>
      </li>
    )
  }
}

export default TaskItem;