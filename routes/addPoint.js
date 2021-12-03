const express          = require('express');
const router           = express.Router();
const helpers = require('../lib/map_helpers');
const cookieSession    = require('cookie-session');
const bodyparser = require('body-parser')


router.use(bodyparser.json());
router.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));


module.exports = (db) => {

  // POST /addpoints
 // saves a point after a form is submitted
 router.post("/", (req,res) => {

  const point = req.body
  const userId = req.session.userId;
  const pointVal = {...point, user_id: userId};
  //need to add the point data into the function
  helpers.addPoint(pointVal)
    .then(point => {

        res.json(point);

    })
    .catch(err => res.status(404).send(err));
  });
  return router;
};
