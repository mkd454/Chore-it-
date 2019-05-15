const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

// Matches with "/api/groups"
router.route("/")
  .get(groupsController.findAll)
  .post(groupsController.create);

// Matches with "/api/groups/:id"
router
  .route("/:id")
  .get(groupsController.findById)
  .put(groupsController.update)
  .delete(groupsController.remove);

// Matches with "/api/groups/users/:id"
router
  .route("/users/:id")
  .get(groupsController.findUserGroups);

router
  .route("/except/:id")
  .get(groupsController.findAllExcept);

router
  .route("/:userId/leaveGroup")
  .put(groupsController.leaveGroup);
  
router
  .route("/:groupId/roommates")
  .get(groupsController.themRoommatesDoe);

module.exports = router;
