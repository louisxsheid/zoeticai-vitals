const mongoose = require("mongoose");

const vitalSchema = mongoose.Schema({
  temperature: {
    type: String,
    required: true,
  },
  bloodPressure: {
    type: String,
    required: true,
    unique: true,
  },
  oxygen: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  time: { 
    type: Date, 
    default: Date.now 
  },
});

const Vital = mongoose.model("Vital", vitalSchema);

// const testUser = {
//   temperature: "98.5",
//   "bloodPressure": "124/60",
//   "oxygen": "98% 75bpm",
//   "patient": 'test'
// };

// const newTest = new Vital(testUser);

// newTest.save((err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("added to DB");
// });

module.exports = Vital;