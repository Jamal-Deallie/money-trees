const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
require('dotenv').config();

cloudinary.config({
  cloud_name: env.process.CLOUDINARY_NAME,
  api_key: env.process.CLOUDINARY_API_KEY,
  api_secret: env.process.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
