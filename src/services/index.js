const jobs = require('./jobs/jobs.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(jobs);
  app.configure(users);
};
