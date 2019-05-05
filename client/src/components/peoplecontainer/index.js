import React, { Component } from 'react';
import PeopleItem from '../peopleitem';

class PeopleContainer extends Component {
  state = {
    people: [
      {
        id: 0,
        name: 'Satan'
      },
      {
        id: 1,
        name: 'Mary'
      },
      {
        id: 2,
        name: 'Jesus'
      },
      {
        id: 3,
        name: 'God'
      }
    ]
  }

  render() {
    return (
      <div className="list-group" id="list-tab" role="tablist">
        <PeopleItem people={this.state.people} />
      </div>
    )
  }
}

export default PeopleContainer;