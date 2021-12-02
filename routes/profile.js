const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //GET profile
  router.get("/", (req, res) => {

    db.query(`
    SELECT maps.*, users.*
    FROM maps
    JOIN users ON users.id = user_id;`)
    .then(data => {
      //res.json({ users });
      //console.log("user data", data.rows)
      const templateData = {users: data.rows}

      //console.log('USERS', users)
      res.render("profile", templateData)

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });



  });


  return router;
};
