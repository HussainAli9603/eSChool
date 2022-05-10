const express = require("express");
const {
  getAllResults,
  createResults
} = require("../controllers/resultsController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/admin/view-results").get(getAllResults);

router
  .route("/admin/results/new").post(createResults);


module.exports = router;
