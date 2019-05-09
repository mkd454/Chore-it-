import axios from "axios";

export default {
  // Gets all groups
  getBooks: function() {
    return axios.get("/api/groups");
  },
  // Gets the group with the given id
  getBook: function(id) {
    return axios.get("/api/groups/" + id);
  },
  // Deletes the group with the given id
  deleteBook: function(id) {
    return axios.delete("/api/groups/" + id);
  },
  // Saves a group to the database
  saveBook: function(groupData) {
    return axios.post("/api/groups", groupData);
  }
};
