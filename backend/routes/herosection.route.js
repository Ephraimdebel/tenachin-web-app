// import controllers
const {
  getHeroSection,
  updateHeroSection,
  addHeroSection,
} = require("../controllers/herosection.controller");

// import express
const express = require("express");
const router = express.Router();


// define routes
router.post("/", addHeroSection);
router.get("/", getHeroSection);
router.put("/", updateHeroSection);

// export the router
module.exports = router;