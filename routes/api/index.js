const router = require("express").Router();
const groupRoutes = require("./groups");

// Book routes
router.use("/groups", groupRoutes);

module.exports = router;
