const cookieSession    = require('cookie-session')
const express          = require('express');
const router           = express.Router();

router.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEY]
}));


module.exports = function(db) {

  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({});
  });

  return router;
}
