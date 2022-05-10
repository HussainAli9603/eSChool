const express = require("express");
const {
  createClasses,
  getAllClasses,
  getClassDetails,
} = require("../controllers/classesController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/classes/new").post(createClasses);

router.route("/admin/classes/all").get(getAllClasses);

router.route("/admin/class/:id").get(getClassDetails);



module.exports = router;









