const express = require("express");
const router = express.Router();

module.exports = (db) => {

  // GET /map/
  router.get("/", (req, res) => {
    res.render("map");
  })
  return router;
};
