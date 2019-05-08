import React, { Component } from 'react';
import './style.css';

class RoommateCard extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    ownerId: this.props.ownerId,
    image: this.props.image,
    description: this.props.description
  }

  render() {
    return (
      <div className="card roommate-card">
        <img src={this.state.image} className="card-img-top rounded-circle" alt="roommate"/>
        <div className="card-body">
          <h5 className="card-title text-center">{this.state.name}</h5>
          <small className="card-text">{this.state.description}</small>
        </div>
      </div>
    )
  }
}

export default RoommateCard;