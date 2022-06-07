const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const upload = require('../utils/multer');

const router = express.Router();

router.post('/signup', upload.single('avatar'), authController.signup);
router.post('/signin', authController.signin);
router.post('/logout', authController.logout);

router.route('/').get(userController.getAllUsers);

router.patch(
  '/updateMe',
  upload.single('avatar'),
  authController.protect,
  userController.updateMe
);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
