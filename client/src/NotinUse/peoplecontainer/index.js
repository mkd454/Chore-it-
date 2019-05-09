import React, { Component } from 'react';
import PeopleItem from '../peopleitem';

class PeopleContainer extends Component {
  state = {
    people: [
      {
        id: 1,
        roommates: [
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
      },
      {
        id: 2,
        roommates: [
          {
            id: 0,
            name: 'Eric'
          },
          {
            id: 1,
            name: 'Dat',
          },
          {
            id: 2,
            name: 'Matt'
          },
          {
            id: 3,
            name: 'Mary'
          }
        ]
      },
      {
        id: 3,
        roommates: [
          {
            id: 0,
            name: 'Naruto'
          },
          {
            id: 1,
            name: 'Sasuke'
          },
          {
            id: 2,
            name: 'Sakura'
          },
          {
            id: 3,
            name: 'Kakashi'
          }
        ]
      }
    ]
  }

  getRoommates = () => {
    for (let i=0; i<this.state.people.length; i++) {
      if (this.state.people[i].id == this.props.session_id) {
        return this.state.people[i].roommates;
      }
    }
  }
  
  render() {
    return (
      <div className="list-group" id="list-tab" role="tablist">
        <PeopleItem people={this.getRoommates()} />
      </div>
    )
  }
}

export default PeopleContainer;