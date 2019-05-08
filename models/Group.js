const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  name: { type: String, required: true },
  users: [
      {
          type: Schema.Types.ObjectId,
          ref: "Users"
      }
  ],
  tasks: [
      {
          type: Schema.Types.ObjectId,
          ref: "Tasks"
      }
  ] 
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
