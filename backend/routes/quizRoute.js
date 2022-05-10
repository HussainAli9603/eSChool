const express = require("express");
const {
  createQuestion,
  getAllQuizs,
  getAllTest,
  getQuizsDetails,
  getTestDetails
} = require("../controllers/quizController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

// router.route("/products").get(getAllProducts);

router.route("/admin/quiz/new").post(createQuestion);

router.route("/admin/quiz").get(getAllQuizs);

router.route("/admin/test").get(getAllTest);

router.route("/admin/quiz/:id").get(getQuizsDetails);

router.route("/admin/test/:id").get(getTestDetails);

module.exports = router;
