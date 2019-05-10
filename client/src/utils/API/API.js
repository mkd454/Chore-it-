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
    console.log("doop doop")
    console.log(id);
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log("did this run")
    console.log(userData);
    if (userData.authId)
    return axios.post("/api/users", userData);
  },
  // Update user's group Id
  updateUser: function(groupData, id, newData) {
    console.log("doop doop 2.0")
    console.log(groupData);
    console.log(id);
    return axios.put("api/users/" + id, newData);
  }
};
