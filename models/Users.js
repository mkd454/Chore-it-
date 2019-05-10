const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    authId: { type: String, required: true, unique: true },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tasks"
        }
    ],
    inGroup: [
        { 
            type: Schema.Types.ObjectId, 
            ref: "Group",
            default: "Whatabatbingbogn"
        }
    ],
    balance: { type: Number, default: 0},
    token: {type: String, required: true}
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
