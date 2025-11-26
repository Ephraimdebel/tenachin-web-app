const express = require('express');
const router = express.Router();
const {getCallToAction, updateCallToActionSection} = require("../controllers/calltoaction.controller.js");

router.get("/",getCallToAction);
router.put("/",updateCallToActionSection);

module.exports = router;