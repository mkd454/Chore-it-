const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.Tasks
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Not required for now
//   findById: function(req, res) {
//     db.Tasks
//       .find({authId: req.params.id})
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    db.Tasks
    .create(req.body)
    .then(dbModel => {
        console.log(dbModel._id);
        db.Group.findOneAndUpdate({
            _id: req.body.inGroup }, {
            $push: {tasks: req.body.taskName} 
            }
        })
    })
    .then(dbTask => res.json({dbModel, dbTask}))
    .catch(err => res.status(422).json(err));
  },
  
  // Not required for now 
//   update: function(req, res) {
//     console.log("Changing user's groupId: ");
//     console.log(req.body);
//     db.Tasks
//       .findOneAndUpdate({ 
//         authId: req.body.userid }, {
//         inGroup: req.body.groupid.inGroup })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  remove: function(req, res) {
    db.Tasks
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};