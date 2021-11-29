const express          = require('express');
const router           = express.Router();
const helpers = require('../lib/helpers');
const cookieSession    = require('cookie-session');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser')


router.use(bodyparser.json());
router.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));


module.exports = (db) => {
  // GET /login/
  router.get("/", (req, res) => {
    res.render("login");
  });

  // POST /login/
 // Logs a user in after authenticating email and password.
 router.post("/", (req,res) => {
   const email = req.body.email;
   const password = req.body.password;

  helpers.getUserWithEmail(email)
    .then(user => {
      if (user  && bcrypt.compareSync(password, user.password)) {
        req.session.userId = user.id;
        res.redirect("/");
      } else {
        console.log("error when logging in")
        res.redirect("/");
      }
    })
    .catch(err => res.status(404).send(err));
  });
  return router;
};
