const Stats = require('./stats');
const Images = require('./images');
const Comments = require('./comments');

const async = require('async');

module.exports = (viewModel, callback) => {
  async.parallel([
    function(next) {
      Stats(next)
    },
    function(next) {
      Images.popular(next);
    },
    function(next) {
      Comments.newest(next)
    }],
    function(err, results) {
      viewModel.sidebar = {
        stats: results[0],
        popular: results[1],
        comments: results[2],
      };
      callback(viewModel);
    }
  );
};
