const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const upload = require('../utils/multer');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.route('/').get(userController.getAllUsers);

router.patch(
  '/updateMe',
  authController.protect,
  userController.updateMe
);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
