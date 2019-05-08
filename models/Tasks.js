const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  assigned: { type: String, required: true },
  amount: {type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
