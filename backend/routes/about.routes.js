const express = require("express");
const {
  getAbout,
  updateAbout,
  createListItem,
  editListItem,
  removeListItem
} = require("../controllers/about.controller");

const router = express.Router();

router.get("/", getAbout);

router.put("/", updateAbout);

router.post("/list", createListItem);

router.put("/list/:id", editListItem);

router.delete("/list/:id", removeListItem);

module.exports = router;
