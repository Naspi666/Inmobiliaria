import passport from "passport";

import sidebar from "../helpers/sidebar";
import { Image } from '../models';

export const renderSignUp = (req, res) => {
  res.render("authentication/signup", {
    layout: "auth",
  });
};

export const renderSignIn = (req, res) => {
  res.render("authentication/signin", {
    layout: "auth",
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

export const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};