import React, { Component } from 'react';
import API from '../../utils/API/API';
import './style.css';

class GroupItem extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    join: this.props.join
  }

  renderContent = () => {
    if (this.state.join) {
      return (
        <div>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {this.state.name}
            <div className="badge-container">
              <span className="badge badge-primary" onClick={() => this.props.handleJoin(this.state.id)}>+</span>
            </div>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {this.state.name}
            <div className="badge-container">
              <span className="badge badge-danger" onClick={()=> this.props.leaveGroup(this.props.userId, this.state.id)}> ✘ </span>
            </div>
          </li>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default GroupItem;