const { Image } = require('../models');

module.exports = {
  popular: async function(cb) {
    const images = await Image.find({}, {}, {limit: 9, sort: {likes: -1}});
    cb(null, images);
  }
};
