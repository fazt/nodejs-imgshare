const express = require('express');
const router = express.Router();

// Controllers
const home = require('../controllers/home');
const image = require('../controllers/image');
const auth = require('../controllers/auth');

module.exports = app => {

  router.get('/', home.index);
  router.get('/images/:image_id', image.index);
  router.post('/images', image.create);
  router.post('/images/:image_id/like', image.like);
  router.post('/images/:image_id/comment', image.comment);
  router.delete('/images/:image_id', image.remove);
  
  // Authentication routes
  router.get('/auth/signin', auth.renderSignIn);
  router.post('/auth/signin', auth.signIn);

  router.get('/signup', auth.renderSignUp);
  router.post('/signup', auth.signUp);

  router.get('/logout', auth.logout);

  app.use(router);

};
