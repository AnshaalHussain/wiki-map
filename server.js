// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT             = process.env.PORT || 8080;
const sassMiddleware   = require("./lib/sass-middleware");
const express          = require("express");
const app              = express();
const morgan           = require("morgan");
const bcrypt           = require('bcrypt');
const cookieSession    = require('cookie-session');
const bodyparser       = require('body-parser')
const helpers          = require('./lib/map_helpers');
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

//const usersRoutes = require("./routes/users");
//const widgetsRoutes = require("./routes/widgets");

const logoutRoutes = require("./routes/logout");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const mapRoutes = require("./routes/createmap");
const profileRoutes = require("./routes/profile");
const favoriteRoutes = require("./routes/favorite");
const addPointRoutes = require("./routes/addPoint");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own


// app.use("/api/users", usersRoutes(db));
//app.use("/api/widgets", widgetsRoutes(db));
app.use("/logout", logoutRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/register", registerRoutes(db));
app.use("/createmap", mapRoutes(db));
app.use("/profile", profileRoutes(db));
app.use("/favorite", favoriteRoutes(db));
app.use("/addpoint", addPointRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const maps = helpers.getMaps().then(result => {
    const templateVars = { maps: result}
    res.render("index", templateVars)

  })
});

app.get("/map/:id", (req, res) => {
  const mapId = req.params.id;
  const data = { mapId }
  helpers.getMap(mapId).then(result => {
    // send json instead of render
    data.map = result;
    // res.render("map", templateVars)
  })
  .then(helpers.getPointbyMapId(mapId).then(points => {
    data.points = points;
    res.send(data);
  }))
});

app.get("/editpoint", (req, res) => {
  const mapId = req.params.id;
  const data = { mapId }
  helpers.getMap(mapId).then(result => {
    // send json instead of render
    data.map = result;
    // res.render("map", templateVars)
  })
  .then(helpers.getPointbyMapId(mapId).then(points => {
    data.points = points;
    res.send(data);
  }))
});



app.get("/map/view/:id", (req,res) => {
  const mapId = req.params.id
  res.render("map", {mapId});
})


// maps route- needs to be relocated to a routing file
app.get("/map", (req, res) => {
  res.render("map");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
