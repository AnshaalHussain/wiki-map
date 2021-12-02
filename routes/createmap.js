
const express          = require('express');
const router           = express.Router();
const helpers          = require('../lib/map_helpers');
const cookieSession    = require('cookie-session');
const bodyparser       = require('body-parser')


router.use(bodyparser.json());
router.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));


module.exports = (db) => {
  // GET /creatmap/
  router.get("/", (req, res) => {
    res.render("createmap");
  });


  //POST /createmap/
  router.post("/", (req, res) => {
    console.log(" req.body-------" ,req.body)
    const map = req.body;
    const userId = req.session.userId;
    if(!userId) {
      alert("log in before creating a map");
      res.redirect("/")
    }
    helpers.createNewMap(map)
      .then(user => {
        res.redirect("/")
      })
      .catch(error => console.log(error));



  })

  return router;
};



