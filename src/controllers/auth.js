import passport from "passport";

export const renderSignUp = (req, res) => {
  res.render("authentication/signup", {
    layout: "nostats",
  });
};

export const renderSignIn = (req, res) => {
  res.render("authentication/signin", {
    layout: "nostats",
  });
};

export const signUp = passport.authenticate("signup", {
  successRedirect: "/signin",
  failureRedirect: "/signup",
  failureFlash: true,
});

export const signIn = passport.authenticate("signin", {
  successRedirect: "/",
  failureRedirect: "/signin",
  failureFlash: true,
});

export const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
