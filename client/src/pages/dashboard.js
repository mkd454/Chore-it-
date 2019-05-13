 // This has all of the lego dudes

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Card from "../components/Welcome-Card/index"

import { AuthConsumer } from "../utils/Auth/authContext";
import Can from "../utils/Auth/Can";
import Logout from "../components/authButtons/Logout";
import Profile from "../components/ProfileComponent/Profile";
import PostsList from "../pages/PostsList"; /////////////REMEMBER TO CHANGE
import Nav from "../components/navbar";
import TasksList from "../components/taskslist";
import GroupsList from '../components/groupslist';

import "./dashboard.css";
import API from "../utils/API/API";

class DashboardPage extends Component {
  state = {
    activeTab: "tasks",
    tasks: [],
    groups: []
  }

  changeTab = activeTab => {
    this.setState({
      activeTab: activeTab
    });
  }

  getUserData = userId => {

    API.getUserTasks(userId)
      .then(res => this.setState({
        tasks: res.data
      }))
      .catch(err => console.log(err));
  }

  renderUserContent = (user) => {
    return (
      <div className="dashboard-flex">
        <div className="container dashboard-container">
          <Profile user={user}/>        
          <Nav changeTab={this.changeTab}/>
          {this.state.activeTab === "tasks"
          ? <TasksList tasks={this.state.tasks} userId={user.id}></TasksList>
          : <GroupsList groups={this.state.groups} userId={user.id}></GroupsList>}
          <Logout />
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state.tasks);
    return (
      <AuthConsumer>
        {({ user }) => (
          <Can
            role={user.role}
            perform="dashboard-page:visit"
            yes={() => this.renderUserContent(user)}
            no={() => <Redirect to="/" />}
          />
        )}
      </AuthConsumer>
    );
  }
}

export default DashboardPage;
