import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SessionItem extends Component {
  state = {}

  render() {
    return (
      <div>
        {this.props.sessions.map(session => (
          <Link to={"/session/" + session.id} key={session.id} className="list-group-item list-group-item-action" id={session.id}>{session.name}</Link>
        ))}
      </div>
    );
  } 
}

export default SessionItem;