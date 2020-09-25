const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const { requestController } = require('./controllers/requestController');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Nothing here yet");
});

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to database!");
});

mongoose.connection.on("error", (err) => {
  console.log("ERROR CONNECTING TO DATABASE: ", err);
});

app.get("/data", requestController.getVitals, (req, res) => {
  return res.status(200).send(res.locals.vitals);
});

app.post("/data", requestController.postVitals,  (req, res) => {
  return res.status(200).send(res.locals.vitals)
});

app.post('/day-data', requestController.getVitalsFromDay, (req, res) => {
  return res.status(200).send(res.locals.dayVitals);
})

// Global Error handler
app.use((err, req, res, next) => {
  // Set up default error
  const defaultError = {
    log: "Error caught in global error handler",
    status: 500,
    msg: {
      err: err,
    },
  };

  // Update default error message with provided error if there is one
  const output = Object.assign(defaultError, err);
  res.send(output);
});

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
