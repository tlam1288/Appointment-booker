const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
