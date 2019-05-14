const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  userId: { type: String, required: true },
  taskName: { type: String, required: true },
  groupId: { type: Schema.Types.ObjectId, ref: "Group"},
  amount: {type: Number, required: true },
  date: { type: Date, default: Date.now },
  dueDate: { type: Date }
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
