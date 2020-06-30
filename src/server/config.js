const path = require("path");
const morgan = require("morgan");
const express = require("express");
const errorHandler = require("errorhandler");
const multer = require("multer");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const flash = require("connect-flash");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const session = require("express-session");
const passport = require("passport");
require("../config/passport");

const routes = require("../routes");

module.exports = (app) => {
  // Settings
  app.set("port", process.env.PORT || 3000);
  app.set("views", path.join(__dirname, "../views"));
  app.engine(
    ".hbs",
    exphbs({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      helpers: require("./helpers"),
      extname: ".hbs",
      handlebars: allowInsecurePrototypeAccess(Handlebars),
    })
  );
  app.set("view engine", ".hbs");
  app.use(
    multer({ dest: path.join(__dirname, "../public/upload/temp") }).single(
      "image"
    )
  );

  // middlewares
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    session({
      secret: "somesecretkey",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  // Global Variables
  app.use((req, res, next) => {
    // the curren user session
    app.locals.user = req.user || null;
    // succes messages by flash
    app.locals.success = req.flash("success");
    // passport authentication erros
    app.locals.error = req.flash("error");
    next();
  });

  // Routes
  routes(app);

  // Static files
  app.use("/public", express.static(path.join(__dirname, "../public")));

  // Error Handling
  if ("development" === app.get("env")) {
    app.use(errorHandler());
  }

  return app;
};
