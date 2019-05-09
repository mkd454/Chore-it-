const router = require("express").Router();
const groupRoutes = require("./groups");
const userRoutes = require("./users");

// Group routes
router.use("/groups", groupRoutes);

// User routes
router.use("/users", groupRoutes);

module.exports = router;
