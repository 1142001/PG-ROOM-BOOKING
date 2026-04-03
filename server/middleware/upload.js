const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'your_cloud_name', // replace with your Cloudinary cloud name
  api_key: 'your_api_key',     // replace with your Cloudinary API key
  api_secret: 'your_api_secret' // replace with your Cloudinary API secret
});

// Initialize Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads', // specify folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif'], // allowed formats
  },
});

// Create multer upload middleware
const upload = multer({ storage });

module.exports = upload;