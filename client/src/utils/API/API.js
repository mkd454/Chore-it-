import axios from "axios";

export default {
  // Gets all groups
  getGroups: function() {
    return axios.get("/api/groups");
  },
  // Get groups user is not in
  getGroupsExcept: function(userId) {
    return axios.get("/api/groups/except/" + userId);
  },
  // Gets the group with the given id
  getGroup: function(id) {
    return axios.get("/api/groups/" + id);
  },
  getUserGroups: function(userId) {
    return axios.get("/api/groups/users/" + userId);
  },
  // Deletes the group with the given id
  deleteGroup: function(id) {
    return axios.delete("/api/groups/" + id);
  },
  saveGroup: function(groupData) {
    return axios.post("/api/groups", groupData);
  },
  updateGroup: function(groupId, userId) {
    return axios.put("/api/groups" + groupId, { groupId, userId});
  },

  leaveGroup: function(userId, groupId) {
    return axios.put("/api/groups/"+ userId + "/leaveGroup", {userId, groupId})
  },

  pullRoommatesCall: function(groupId) {
    return axios.get("/api/groups/"+ groupId + "/roommates", {groupId})
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Finds user by authId & changes their group
  changeUsersGroup: function( groupid, userid) {
    return axios.put("/api/users/" + userid, {groupid,userid});
  },
  joinGroup: function ( data ) {
    return axios.post("/api/users/groups/", data);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
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
    return axios.post("/api/tasks", taskData);
  },

  deleteTask: function(userId, taskId){
    return axios.delete("/api/tasks/" + taskId +"/" + userId);
  },

  updateBalance: function(userId, newBalance){
    return axios.put("api/users/"+ userId + "/balance", {userId, newBalance})
  }
};
