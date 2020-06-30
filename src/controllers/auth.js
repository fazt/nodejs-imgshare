const passport = require('passport');

const ctrl = {};

ctrl.renderSignUp = (req, res) => {
  res.render('authentication/signup', {
    layout: 'nostats'
  });
};

ctrl.renderSignIn = (req, res) => {
  res.render('authentication/signin', {
    layout: 'nostats'
  });
};

ctrl.signUp = passport.authenticate('signup', {
  successRedirect: '/signin',
  failureRedirect: '/signup',
  failureFlash: true
});

ctrl.signIn = (req, res) => {
  res.send('signin');
};

ctrl.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

module.exports = ctrl;