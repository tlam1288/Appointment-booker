const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true },
  email: { type: String, require: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
