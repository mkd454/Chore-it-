const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Users
      .find({authId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Creates the user, adds the authId, grabs "name" from login.
  create: function(req, res) {
    console.log(req.body)
    const user = {
      authId: req.body.authId,
      name: req.body.name
    }
    db.Users
      .findOneAndUpdate({authId: req.body.authId}, user, {upsert: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    console.log("hit me baby one more time")
    console.log(req)
    db.Users
      .findOneAndUpdate({ authId : req.body.id }, {inGroup: req.body.groupData})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};