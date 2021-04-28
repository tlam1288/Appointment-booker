const appointmentModel = require("../models/appointment");

module.exports = {
  findAllAppointments,
};

function findAllAppointments(req, res) {
  appointmentModel.find((error, data) => {
    if (error) {
      res.status(500).json({
        message: "error fetching appointments",
        error: error,
      });
    } else {
      res.status(200).json(data);
    }
  });
}
