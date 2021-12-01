const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //GET profile
  router.get("/", (req, res) => {

    db.query(`SELECT * FROM users;`)
    .then(data => {
      //res.json({ users });
      //console.log("user data", data.rows)
      const user = data.rows[0]

      res.render("profile", user)

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });



  });


  return router;
};
