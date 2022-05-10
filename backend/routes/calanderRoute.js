const express = require("express");
const {
  createCalander,
  getAllToday,
  getAllUpComming,
} = require("../controllers/calanderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/calander/new").post(createCalander);

router.route("/admin/calander/today").get(getAllToday);

router.route("/admin/calander/upComming").get(getAllUpComming);

module.exports = router;
