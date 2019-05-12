const router = require("express").Router();
const groupRoutes = require("./groups");
const userRoutes = require("./users");
const taskRoutes = require("./tasks")

// Group routes
router.use("/groups", groupRoutes);

// User routes
router.use("/users", userRoutes);

// Task routes
router.use("/tasks", taskRoutes)
module.exports = router;
