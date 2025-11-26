// services.route.js
const express = require("express");
const {
  getServicesController,
  createServiceController,
  updateServiceController,
  deleteServiceController,
} = require("../controllers/services.controller.js");

const router = express.Router();

router.get("/", getServicesController);
router.post("/", createServiceController);
router.put("/:id", updateServiceController);
router.delete("/:id", deleteServiceController);

module.exports = router;
