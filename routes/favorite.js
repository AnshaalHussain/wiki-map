const express = require("express");
const router = express.Router();

const helpers = require("../lib/map_helpers");

module.exports = (db) => {
  router.post("/", (req, res) => {
    helpers
      .getContributedMap(1)
      .then((data) => {
        if (data) {
          const users = data.rows;
          res.json({ users });
          console.log("TEST", users);
          res.redirect("/")
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
