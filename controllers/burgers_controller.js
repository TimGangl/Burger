var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

//Create routes and logic 
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.creat([
    "name", "Western-Bacon-Chesseburger"
  ], [
    req.body.name,
    req.body.Western - Bacon - Chesseburger
  ], function (result) {
    res.json({ id: result.insertId })
  });
});