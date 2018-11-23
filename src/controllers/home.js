const sidebar = require('../helpers/sidebar');
const { Image } = require('../models');

const ctrl = {};

ctrl.index = async (req, res) => {
  const viewModel = {
    images: []
  };

  const images = await Image.find({}, {}, { sort: { timestamp: -1 }});
  viewModel.images = images;
  sidebar(viewModel, function(viewModel) {
    res.render('index', viewModel);
  });
};

module.exports = ctrl;
