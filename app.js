require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

// WHEN INTRODUCING USERS DO THIS:
// INSTALL THESE DEPENDENCIES: passport-local, passport, bcryptjs, express-session
// AND UN-COMMENT OUT FOLLOWING LINES:

const session = require("express-session");
const passport = require("passport");

require("./configs/passport");

// IF YOU STILL DIDN'T, GO TO 'configs/passport.js' AND UN-COMMENT OUT THE WHOLE FILE

mongoose
  .connect("mongodb://localhost/save-food", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

// ADD SESSION SETTINGS HERE:

app.use(
  session({
    secret: "keyboard-cat",
    resave: true,
    saveUninitialized: true,
    expires: new Date(Date.now + 43200),
  })
);

// USE passport.initialize() and passport.session() HERE:

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// ADD CORS SETTINGS HERE TO ALLOW CROSS-ORIGIN INTERACTION:

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

// ROUTES MIDDLEWARE STARTS HERE:

// const index = require("./routes/index");
// app.use("/", index);

const authRoutes = require("./Routes/auth.routes");
app.use("/api", authRoutes);

const userRoutes = require("./Routes/user.routes");
app.use("/api", userRoutes);

const offerRoutes = require("./Routes/offer.routes");
app.use("/api", offerRoutes);

module.exports = app;
