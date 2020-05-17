const moment = require('moment');
const helpers = {};

helpers.timeago = timestamp => {
  return moment(timestamp).startOf('minute').fromNow();
};

helpers.getCurrentYear = () => {
  return new Date().getFullYear();
}

module.exports = helpers;
