import React, { Component } from 'react';
import PeopleContainer from '../components/peoplecontainer';

class SessionDetails extends Component {
  state = {}

  render() {
    return (
      <div>
        <h3>Roommates</h3>
        <div className="row">
          <div className="col-md-4 offset-md-4 col-xs-12">
            <PeopleContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default SessionDetails;