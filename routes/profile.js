const express = require("express");
const router = express.Router();
const helpers = require("../lib/map_helpers");

module.exports = (db) => {
  //GET profile
  router.get("/", (req, res) => {

    const templateData = {};
    helpers
      .getFavouriteMap(3)
      .then((data) => {
        templateData.users = data.rows;
        console.log("ROWS1", data.rows);
      })

      .then((data) => {
        helpers
          .getContributedMap(3).then((contributedData) => {
          console.log("contributed", contributedData)
          templateData.contributed = contributedData;

          res.render("profile", templateData);
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
