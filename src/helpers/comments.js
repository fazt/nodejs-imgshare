const { Comment, Image } = require('../models');
const async = require('async');

module.exports = {
  newest: async function(cb) {
    const comments = await Comment.find({}, {}, { limit: 5, sort: { 'timestamp': -1}});
    function attachImage(comment, next) {
      Image.findOne({_id: comment.image_id}, function(err, image) {
        comment.image = image;
        next(err);
      });
    }
    async.each(comments, attachImage, function(err) {
      cb(err, comments);
    });
  }
};
