const express = require("express");
const router = express.Router();
const helpers = require("../lib/map_helpers");

module.exports = (db) => {
  //GET profile
  router.get("/", (req, res) => {
    helpers
      .getFavouriteMap(1)
      .then((data) => {
        const templateData = { users: data.rows };
        //res.json({ users });
        //console.log("user data", data)

        //console.log('TEMPLATE DATA', templateData)
        res.render("profile", templateData);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
