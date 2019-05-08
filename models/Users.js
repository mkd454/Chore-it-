const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tasks"
        }
    ],
    inGroup: { type: Boolean, default: false},
    balance: { type: Number, default: 0}
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
