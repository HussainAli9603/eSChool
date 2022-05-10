const express = require("express");
const {
  createCourses,
  getAllCourses,
  createCourseTopic,
  getCourseDetails,
  getCourseTopicDetails,
  getCourseTopicDetails2,
} = require("../controllers/coursesController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/courses/new").post(createCourses);

router.route("/admin/course-topic/new").post(createCourseTopic);

router.route("/admin/courses/all").get(getAllCourses);

router.route("/admin/courses/:id").get(getCourseDetails);

router.route("/admin/course-topic").get(getCourseTopicDetails);

router.route("/student/courses/:id").get(getCourseTopicDetails2);

module.exports = router;









