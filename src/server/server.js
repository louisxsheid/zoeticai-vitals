const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// Bring in routes

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Nothing here yet");
});

// // CONNECT TO MONGO DB
// mongoose.connect(process.env.DB_CONNECTION, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("connected to database!");
// });

// mongoose.connection.on("error", (err) => {
//   console.log("ERROR CONNECTING TO DATABASE: ", err);
// });

// postRequest route
app.post("/data", requestController.postRequest, (req, res) => {
  return res.status(200).json(res.locals.data);
});

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
