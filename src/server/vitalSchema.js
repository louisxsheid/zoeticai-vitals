const mongoose = require("mongoose");

const vitalSchema = mongoose.Schema({
  temperature: {
    type: String,
    required: true,
  },
  bloodPressure: {
    type: String,
    required: true,
  },
  oxygen: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Vital = mongoose.model("Vital", vitalSchema);


module.exports = Vital;