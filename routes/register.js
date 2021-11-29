// register.js
const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');
const helpers = require('../lib/helpers');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY],
}));



module.exports = (db) => {
  //GET /register/
  router.get("/", (req, res) => {
    res.render("register");
  });

  //POST /register/
  router.post("/", (req, res) => {
    console.log(" req.body-------" ,req.body)
    const user = req.body;
    helpers.getUserWithEmail(user.email)
    .then(result => {
      if(!result) {
        // if email doesn't exist in database
        user.password = bcrypt.hashSync(user.password, 12);
        helpers.createNewUser(user)
          .then(user => {
            req.session.userId = user.id;
            res.redirect("/")
          })
          .catch(error => console.log(error));
        }
    });

  })
  return router;
};
