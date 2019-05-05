import React, { Component } from 'react';
import SessionItem from '../sessionitem';

class SessionContainer extends Component {
  state = {
    sessions: [
      {
        id: 0,
        name: 'Session 1'
      },
      {
        id: 1,
        name: 'Session 2'
      },
      {
        id: 2,
        name: 'Session 3'
      }
    ]
  }

  render() {
    return (
      <div className="list-group" id="list-tab" role="tablist">
        <SessionItem sessions={this.state.sessions}/>
      </div>
    )
  }
}

export default SessionContainer;