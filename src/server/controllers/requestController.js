// Bring in task model
const models = require('../vitalSchema');

// create task controller
const requestController = {};

// add request middleware
requestController.postVitals = (req, res, next) => {
  const { temperature, bloodPressure, oxygen, patient } = req.body;
  models
    .create({ temperature, bloodPressure, oxygen, patient })
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

// requestController.getVitalFromDay = (req, res, next) => {
//   models
//     .find()
//     .exec()
//     .then((vitalList) => {
//       res.locals.vitals = vitalList;
//       return next();
//     })
//     .catch((err) => {
//       next({
//         log: 'Error in getVitals controller',
//         message: { err: `Error: ${err}` },
//       });
//     });
// };

module.exports = { requestController };