const db = require("../models");

// Defining methods for the groupsController
module.exports = {
  findAll: function(req, res) {
    db.Group
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllExcept: function(req, res) {
    db.Group
      .find({ users: { $ne: req.params.id }})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Group
      .findById(req.params.id)
      .populate("Users")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserGroups: function (req, res) {
    db.Group
      .find({ users: req.params.id })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // format group data
    const groupData = {
      name: req.body.groupName
    }
    // first create the group
    db.Group
      .create(groupData)
      .then(dbModel => {
        // then update the user's obj to say they're in the newly created group
        db.Users.findOneAndUpdate(
          { authId: req.body.userId },
          { $push: { inGroup: dbModel._id }}
        ).then (dbUser => {
          db.Group.findOneAndUpdate(
            { _id: dbModel._id },
            { $push: { users: dbUser.authId }}
          ).then(dbGroup => {
            // probably just send back the group id
            res.json({ dbGroup, dbUser })
          });
        });
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    // db.Group
    //   .findOneAndUpdate({ _id: req.params.groupId }, req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Group
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  leaveGroup: function(req, res){
    db.Group
      .update({_id: req.body.groupId}, {$pull: {users: req.body.userId}})
      .then(dbModel => db.Users.update({ authId: req.body.userId }, {$pull:{groups: req.body.groupId}}))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  themRoommatesDoe: function(req, res){
    db.Group
      .findOne({_id: req.params.groupId})
      .then(dbModel => {
        db.Users
          .find({ "authId": { "$in" : dbModel.users }})
          .then(dbUsers => res.json(dbUsers))
          .catch(err => res.status(422).json(err))
      })
      .catch(err => res.status(422).json(err));
  }
};
