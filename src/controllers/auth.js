import passport from "passport";
import { User } from "../models";

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
  successRedirect: "/auth/signin",
  failureRedirect: "/auth/signup",
  failureFlash: true,
});

export const signIn = passport.authenticate("signin", {
  successRedirect: "/",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const profile = (req, res) => {
  res.render("authentication/profile");
};

export const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
