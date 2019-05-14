import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API/API";

import GroupCard from '../taskitem';

import './style.css';

class GroupsList extends Component {
  state = {
    groups: this.props.groups
  }

  componentWillMount() {
    API.getGroups().then(res  => console.log(res.data));
    console.log("Is this here?");
    // console.log(groups);
    // .filter(obj => {
    //   console.log(obj);
      // return obj.userId == this.props.userId;
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
          <Link className="buttonLink" to="/group/create">
            <button type="button" className="btn btn-primary btn-lg">Create Group</button>
          </Link>
          <Link className="buttonLink" to="/group/join">
            <button type="button" className="btn btn-primary btn-lg">Join Group</button>
          </Link>
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
      <div className="groups-container">
        {this.renderContent()}
      </div>
    )
  }
}

export default GroupsList;