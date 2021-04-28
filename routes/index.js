var express = require("express");
var router = express.Router();

const appointmentController = require("../controllers/appointmentController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/appointment", appointmentController.findAllAppointments);

module.exports = router;
