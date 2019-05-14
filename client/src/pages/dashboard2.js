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
 import DeleteButton from "../components/deleteButton";
 
 import "./dashboard.css";
 import API from "../utils/API/API";
 
 class Dashboard2 extends Component {
   state = {
     activeTab: "tasks",
     tasks: [],
     groups: [],
     groupId: "",
     userBalance: ""
   }
 
   componentDidMount(){
    this.getUserData(this.props.user.id)
  }
 
   changeTab = activeTab => {
     this.setState({
       activeTab: activeTab
     });
   }
 
   updateBalance = amount => {
     let newBalance = this.state.userBalance - amount;

     this.setState({
       userBalance: newBalance
     });
   }
   
   getUserData = userId => {
     API.getUser(userId)
       .then(res => {
         console.log(res.data)
         this.setState({
         groupId: res.data[0].inGroup,
         userBalance: res.data[0].__v
       })})
       .catch(err => console.log(err));
   }

   getUserTasks = userId => {
 
     API.getUserTasks(userId)
       .then(res => this.setState({
         tasks: res.data
       }))
       .catch(err => console.log(err));
   }

//    modifyValue = value => {
//     API.changeBalance
//    }

   render () {
     return (
       <div className="dashboard-flex">
         <div className="container dashboard-container">
           <Profile user={this.props.user} balance={this.state.userBalance} groupId={this.state.groupId}/>        
           <Nav changeTab={this.changeTab}/>
           {this.state.activeTab === "tasks"
           ? <TasksList tasks={this.state.tasks} userId={this.props.user.id} updateBalance={this.updateBalance}></TasksList>
           : <GroupsList groups={this.state.groups} userId={this.props.user.id}></GroupsList>}
           <Logout />
         </div>
       </div>
     );
   }
 }
 
 export default Dashboard2;
 