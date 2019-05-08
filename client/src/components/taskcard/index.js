import React, { Component } from 'react';

class TaskCard extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    description: this.props.description
  }

  render() {
    return (
      <div className="card">
        <div class="card-body">
          <h5 class="card-title">{this.state.name}</h5>
          <p class="card-text">{this.state.description}</p>
        </div>
      </div>
    )
  }
}

export default TaskCard;