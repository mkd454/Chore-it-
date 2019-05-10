const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

const db = require("./models");
console.log("oh no");

db.Group.create({
    name:"test"
}).then(dbGroup => {
    console.log(dbGroup);
});

db.Group.