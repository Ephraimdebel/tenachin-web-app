const express = require('express');
const router = express.Router();
const {
  getAll,
  getOne,
  updateSection,
  createListItem,
  editListItem,
  removeListItem
} = require('../controllers/feature.controller.js');

const upload = require('../middleware/uploadImage');
console.log("fearure route")
router.get("/", getAll);
router.get("/:id", getOne);
router.patch("/:id", (req, res, next) => {
  console.log("➡️ Request received, passing to multer...");
  next();
}, upload.single("media"), (req, res, next) => {
  console.log("➡️ Multer finished. File:", req.file);
  console.log("➡️ Body:", req.body);
  next();
}, updateSection);

// list items
router.post("/:section_id/list", createListItem);
router.put("/:section_id/list/:id", editListItem);
router.delete("/:section_id/list/:id", removeListItem);
module.exports = router;
