const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  assigned: { type: Boolean, default: false },
  assignedTo: { type: Schema.Types.ObjectId, ref: "Users"},
  amount: {type: Number, required: true },
  date: { type: Date, default: Date.now },
  dueDate: { type: Date }
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
