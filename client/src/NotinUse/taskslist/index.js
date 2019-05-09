import React, { Component } from 'react';

import TaskCard from '../taskcard';

import Tasks from "../tasks";

class TasksList extends Component {
  state = {
    tasks: []
  }

  componentWillMount() {
    let tasks = Tasks.filter(obj => {
      return obj.userId == this.props.userId;
    });

    this.setState({
      tasks: tasks
    });
  }

  render () {
    return (
      <div>
        <h2>Tasks</h2>
        <div className="card-columns">
          {this.state.tasks.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              name={task.name}
              description={task.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default TasksList;