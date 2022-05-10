const express = require("express");
const {
  getAllStudents,
  createStudents,
  loginUser,
  logout,
} = require("../controllers/studentsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/admin/students/login").post(loginUser);

router
  .route("/admin/students/logout").post(logout);
  
router
.route("/admin/view-students").get(getAllStudents);

router
.route("/admin/students/new").post(createStudents);


module.exports = router;
