const db = require("../models");

// Defining methods for the usersController
module.exports = {
    findAll: function (req, res) {
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
    create: function (req, res) {
        console.log("Creating Task...")
        const taskDetails = {
            taskName: req.body.name,
            amount: req.body.value
        }
        db.Tasks
            .create(taskDetails)
            .then(dbModel => {
                db.Users.findOne({ authId: req.body.userId })
                    .then(dbUser => {
                        console.log(dbUser.inGroup);
                        console.log(dbModel._id);
                        db.Group.findOneAndUpdate(
                        {_id: dbUser.inGroup}
                        ,
                        {$push: { tasks: dbModel._id }
                        },
                        {new: true})
                    })

            })
            .then(dbTask => res.json(dbTask))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Tasks
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

//     assign: function (req,res) {
//         db.Tasks
//             .findById({_id: req.params.id})
//             .then(dbModel )
//     }
// };