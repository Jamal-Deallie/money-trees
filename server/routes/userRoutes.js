const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');


const router = express.Router();

router.post('/signup', authController.register);
router.post('/signin', authController.login);
router.post('/logout', authController.handleLogout);
router.get('/refreshToken', authController.refreshToken);

router
  .route('/')
  .get(userController.getAllUsers)


router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
