const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

router.get("/map", (req, res, next) => {
  if (req.isAuthenticated()) {
    const userId = req.user._id;
    const userActive = req.user.mapLayer;
    User.find({ _id: userId }).then(user => {
      console.log(user);
      res.render("basic-map", { user });
    });
  } else res.render("basic-map");
});

router.post("/api", (req, res, next) => {
  const { userId, activeLayers } = req.body;
  console.log(userId, activeLayers);

  User.findOneAndUpdate({ _id: userId }, { mapLayer: activeLayers }).then(() => console.log("done"));
});
module.exports = router;
