import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PeopleItem extends Component {
  state = {}

  render() {
    return (
      <div>
        {this.props.people.map(person => (
          <Link key={person.id} className="list-group-item list-group-item-action" id={person.id} data-toggle="list" role="tab" aria-controls="home">{person.name}<TasksList tasks={this.state.tasks} userId={this.props.user.id} updateBalance={this.updateBalance}></TasksList></Link>
        ))}
      </div>
    )
  }
}

export default PeopleItem;