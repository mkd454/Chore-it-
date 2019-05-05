import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SessionItem extends Component {
  state = {}

  render() {
    return (
      <div>
        {this.props.sessions.map(session => (
          <Link key={session.id} to="#list-home" className="list-group-item list-group-item-action" id={session.id} data-toggle="list" role="tab" aria-controls="home">{session.name}</Link>
        ))}
      </div>
    );
  } 
}

export default SessionItem;