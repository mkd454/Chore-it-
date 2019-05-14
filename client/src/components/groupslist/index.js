import React, { Component } from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API/API";

import GroupItem from '../groupitem';

import './style.css';

const styles = {
  smallChange: {
    paddingTop: 10
  }
}

class GroupsList extends Component {
  state = {
    groups: [],
    groupForm: 'list',
    groupName: '',
    allGroups: [],
    needUpdate: false,
  }

  componentWillMount() {
    API.getUserGroups(this.props.userId)
      .then(res => {console.log(res.data);this.setState({
        groups: res.data,
        needUpdate: false
      })})
      .catch(err => console.log(err));

    API.getGroupsExcept(this.props.userId)
      .then(res => this.setState({
        allGroups: res.data,
        needUpdate: false
      }))
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    if (this.state.needUpdate) {
      API.getUserGroups(this.props.userId)
        .then(res => this.setState({
          groups: res.data,
          needUpdate: false
        }))
        .catch(err => console.log(err));
      
      API.getGroupsExcept(this.props.userId)
        .then(res => this.setState({
          allGroups: res.data,
          needUpdate: false
        }))
        .catch(err => console.log(err));
    } else {
      return;
    }
  }

  groupForm = (formState) => {
    this.setState({
      groupForm: formState,
      needUpdate: true
    });
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleJoin = (groupId) => {
    const data = {
      groupId: groupId,
      userId: this.props.userId
    }

    API.joinGroup(data)
      .then(res => this.setState({
        groupForm: 'list',
        needUpdate: true
      }))
      .catch(err => console.log(err));
  }

  addGroup = (e) => {
    e.preventDefault();

    const groupData = {
      groupName: this.state.groupName,
      userId: this.props.userId
    }

    API.saveGroup(groupData)
      .then(res => {
        this.setState({
          groupForm: 'list',
          needUpdate: true
        });
      })
      .catch(err => console.log(err));
 
  }

  renderContent = () => {
    if (this.state.groups.length === 0 && this.state.groupForm === 'list') {
      return (
        <div className="button-container">
          <h3>You are not part of any groups.</h3>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.groupForm('create')}>Create Group</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => this.groupForm('join')}>Join Group</button>
        </div>
      );
    } else if (this.state.groupForm === 'list') {
      return (
        <ul className="list-group">
          {this.state.groups.map(group => (
            <GroupItem
              key={"create-" + group._id}
              id={group._id}
              name={group.name}
              join={false}
            />
          ))}
          <div className="button-container" style={styles.smallChange}>
            <button type="button" className="btn btn-primary btn-lg"
            onClick={() => this.groupForm('create')}>Create Group</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={() => this.groupForm('join')}>Join Group</button>
          </div>
        </ul>
      )
    } else if (this.state.groupForm === 'create') {
      return (
        <div className="form-container">
            <form>
              <div className="form-group">
                <label>Group Name</label>
                <input onChange={this.handleInputChange} name="groupName" value={this.state.taskName} type="text" className="form-control" placeholder="Apartment 301"/>
              </div>
              <div className="groups-container">
                <button onClick={this.addGroup} className="btn btn-primary">Submit</button>
                <button onClick={() => this.groupForm('list')} className="btn btn-primary">Back</button>
              </div>
            </form>
          </div>
      )
    } else if (this.state.groupForm === 'join') {
      return (
        <ul className="list-group">
          {this.state.allGroups.map(group => (
            <GroupItem
              key={"join-" + group._id}
              id={group._id}
              name={group.name}
              join={true}
              handleJoin={this.handleJoin}
            />
          ))}
          <button id="backo" type="button" className="btn btn-primary btn-lg"
          onClick={() => this.groupForm('list')}>Back</button>
        </ul>
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