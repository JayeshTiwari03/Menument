const multer = require("multer");
const path = require("path");

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Only image files are allowed!"), false); // Reject the file
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
