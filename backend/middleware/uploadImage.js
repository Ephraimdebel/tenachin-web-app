const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.config");


const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "tenachin_features",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "mp4", "mov", "avi", "mkv"],
    resource_type: "auto", // <-- automatically detect image/video

    transformation: [{ width: 1200, crop: "limit" }],
  },
});

// --- FIX 1: wrap storage to skip empty file streams ----
const storage = {
  _handleFile(req, file, cb) {
    if (!file || file.size === 0) {
      // Skip file upload
      return cb(null, { path: null });
    }
    cloudinaryStorage._handleFile(req, file, cb);
  },
  _removeFile: cloudinaryStorage._removeFile.bind(cloudinaryStorage),
};

// --- FIX 2: Multer must not block when no file exists ---
const upload = multer({
  storage,
  limits: {
    fileSize: 25 * 1024 * 1024,
  },
  fileFilter(req, file, cb) {
    if (!file) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
});

module.exports = upload;
