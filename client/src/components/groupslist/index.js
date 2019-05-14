import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API/API";

import GroupCard from '../taskitem';

import './style.css';

class GroupsList extends Component {
  state = {
    groups: [],
    groupForm: 'list',
    groupName: '',
    userId: this.props.userId
  }

  componentWillMount() {
    // API.getGroups().then(res  => console.log(res.data));
    // console.log("Is this here?");
    // console.log(groups);
    // .filter(obj => {
    //   console.log(obj);
      // return obj.userId == this.props.userId;
    // });

    // this.setState({
    //   groups: groups
    // });
  }

  groupForm = (formState) => {
    this.setState({
      groupForm: formState
    });
  }

  renderContent = () => {
    if (this.state.groups.length === 0 && this.state.groupForm === 'list') {
      return (
        <div className="button-container">
          <h3>You are not part of any groups.</h3>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.groupForm('create')}>Create Group</button>
          <Link className="buttonLink" to="/group/join">
            <button type="button" className="btn btn-primary btn-lg">Join Group</button>
          </Link>
        </div>
      );
    } else if (this.state.groupForm === 'list') {
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
    } else if (this.state.groupForm === 'create') {
      return (
        <div className="form-container">
            <form>
              <div className="form-group">
                <label>Group Name</label>
                <input onChange={this.handleInputChange} name="taskName" value={this.state.taskName} type="text" className="form-control" placeholder="Wash dishes"/>
              </div>
              <div className="form-button-container">
                <button onClick={this.addTask} className="btn btn-primary">Submit</button>
                <button onClick={() => this.groupForm('list')} className="btn btn-primary">Back</button>
              </div>
            </form>
          </div>
      )
    } else {
      return (
        <div></div>
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