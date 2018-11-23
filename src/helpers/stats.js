const { Comment, Image } = require('../models');

const async = require('async');

module.exports = function(callback) {
  async.parallel([
    function(next) {
      Image.countDocuments(function(err, total) {
        next(err, total);
      });
    },
    function(next) {
      Comment.countDocuments(function(err, total) {
        next(err, total);
      });
    },
    function(next) {
      Image.aggregate([{$group: {
        _id: '1',
        viewsTotal: {$sum: '$views'}
      }}], function(err, result) {
        let viewsTotal = 0;
        if(result.length > 0) {
          viewsTotal += result[0].viewsTotal;
        }
        next(null, viewsTotal);
      })
    },
    function(next) {
      Image.aggregate([{$group: {
        _id: '1',
        likesTotal: {$sum: '$likes'}
      }}], function (err, result) {
        let likesTotal = 0;
        if (result.length > 0) {
          likesTotal += result[0].likesTotal;
        }
        next(null, likesTotal);
      })
    }],
    function(err, results) {
      callback(null, {
        images: results[0],
        comments: results[1],
        views: results[2],
        likes: results[3]
      })
    }
  )
}
