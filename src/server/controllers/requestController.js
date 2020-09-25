// Bring in task model
const models = require('../vitalSchema');

// create task controller
const requestController = {};

// add request middleware
requestController.postVitals = (req, res, next) => {
  const { temperature, bloodPressure, oxygen, date } = req.body;
  models
    .create({ temperature, bloodPressure, oxygen, date })
    .then((result) => {
      res.locals.vitals = result;
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in postVitals controller',
        message: { err: `Error: ${err}` },
      });
    });
};

// get vitals middleware
requestController.getVitals = (req, res, next) => {
  models
    .find()
    .exec()
    .then((vitalList) => {
      res.locals.vitals = vitalList;
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in getVitals controller',
        message: { err: `Error: ${err}` },
      });
    });
};

requestController.getVitalsFromDay = (req, res, next) => {
  const { date } = req.body;
  console.log(date)
  models
    .find({ date: date })
    .exec()
    .then((day) => {
      res.locals.dayVitals = day;
      console.log('haha',res.locals.dayVitals)
      return next();
    })
    .catch((err) => {
      next({
        log: 'Error in getVitals controller',
        message: { err: `Error: ${err}` },
      });
    });
};

module.exports = { requestController };