const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// File upload endpoint
router.post('/', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
    res.status(200).json({ msg: 'File uploaded successfully!' });
  } catch (err) {
    console.error('Upload Error:', err);
    res.status(500).json({ msg: 'Server error during file upload' });
  }
});

module.exports = router;
