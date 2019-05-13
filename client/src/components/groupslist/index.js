import React, { Component } from 'react';

import GroupCard from '../taskitem';

import './style.css';

class GroupsList extends Component {
  state = {
    groups: this.props.groups
  }

  componentWillMount() {
    // let groups = Groups.filter(obj => {
    //   return obj.userId == this.props.userId;
    // });

    // this.setState({
    //   groups: groups
    // });
  }

  renderContent = () => {
    if (this.state.groups.length === 0) {
      return (
        <div className="button-container">
          <h3>You are not part of any groups.</h3>
          <button type="button" className="btn btn-primary btn-lg">Create Group</button>
          <button type="button" className="btn btn-primary btn-lg">Join Group</button>
        </div>
      );
    } else {
      return (
        <div className="card-columns">
          {this.state.groups.map(group => (
            <GroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              description={group.description}
            />
          ))}
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default GroupsList;