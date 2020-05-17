const passport = require("passport");
const { Strategy } = require("passport-local");

const User = require("../models/User");

passport.use(
  "signup",
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const userFound = await User.findOne({ email });
      if (userFound) {
        return done(null, false, { message: "The username is already Taken" });
      }
      const newUser = new User();
      newUser.email = email;
      newUser.password = await User.encryptPassword(password);
      const userSaved = await newUser.save()
      return done(null, userSaved);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = (await User.findById(id)).toObject();
    // delete the user from object respones
    if (user) {
      delete user.password;
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
});
