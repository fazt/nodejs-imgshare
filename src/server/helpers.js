const moment = require('moment');
const helpers = {};

helpers.timeago = timestamp => {
  return moment(timestamp).startOf('minute').fromNow();
};

module.exports = helpers;
