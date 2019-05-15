 // This has all of the lego dudes

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../utils/Auth/authContext";
import Can from "../utils/Auth/Can";

import "./dashboard.css";
import Dashboard2 from "./dashboard2";

class DashboardPage extends Component {
//   state = {
//     activeTab: "tasks",
//     tasks: [],
//     groups: [],
//   }

//   changeTab = activeTab => {
//     this.setState({
//       activeTab: activeTab
//     });
//   }

//   getUserTasks = userId => {

//     API.getUserTasks(userId)
//       .then(res => this.setState({
//         tasks: res.data
//       }))
//       .catch(err => console.log(err));
//   }

//   taskFailed = id => {
//     console.log("This Function Ran!");
//     API.deleteTask(id)
//       .then(res => this.getUserTasks())
//       .catch(err => console.log(err));
//   };

  renderUserContent = (user) => {
    return (
      <Dashboard2 user={user}/>
    );
  } 

  render() {
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
