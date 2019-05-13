import axios from "axios";

export default {
  // Gets all groups
  getGroups: function() {
    return axios.get("/api/groups");
  },
  // Gets the group with the given id
  getGroup: function(id) {
    return axios.get("/api/groups/" + id);
  },
  // Deletes the group with the given id
  deleteGroup: function(id) {
    return axios.delete("/api/groups/" + id);
  },
  saveGroup: function(groupData, userId) {
    return axios.post("/api/groups", { groupData, userId});
  },


  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    console.log("Function running on profile page")
    console.log(id);
    return axios.get("/api/users/" + id);
  },
  // Finds user by authId & changes their group
  changeUsersGroup: function( groupid, userid) {
    console.log("Changing user's group")
    console.log(groupid);
    console.log(userid);
    return axios.put("/api/users/" + userid, {groupid,userid});
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log("On my way to creating a new user! (run when user logs in)")
    console.log(userData);
    if (userData)
    return axios.post("/api/users", userData);
  },

  //Tasks functions

  getTasks: function(){
    return axios.get("/api/tasks");
  },

  getUserTasks: function(userId) {
    return axios.get("/api/tasks/users/" + userId);
  },

  saveTask: function(taskData){
    console.log(taskData);
    console.log("Creating Task...")
    return axios.post("/api/tasks", taskData);
  }
};
