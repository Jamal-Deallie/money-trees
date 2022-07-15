const User = require('../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const cloudinary = require('cloudinary');

const filterObj = (obj, ...allowedFields) => {
  //create empty object
  const newObj = {};
  //loop though the fields to check to see if its allowed and add it to the newObj
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.updateMe = catchAsync(async (req, res, next) => {
  //create an error if user attempts to update password
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for updating password', 400));
  }
  //filter object, so only the eligible fields listed below are updated
  const filteredBody = filterObj(
    req.body,
    'firstName',
    'lastName',
    'email',
    'creditScore'
  );
  //update user document

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  //send update user
  res.status(200).json({
    status: 'success',
    updatedUser,
  });
});

exports.updateAvatar = catchAsync(async (req, res, next) => {
  const { avatar } = req.body;

  try {
    //if the avatar is included upload to cloudinary
    if (avatar) {
      const uploadedRes = await cloudinary.uploader.upload(avatar, {
        upload_preset: 'money-tree-avatar',
      });

      if (uploadedRes) {
        const updatedAvatar = await User.findByIdAndUpdate(
          req.user.id,
          { avatar: uploadedRes.url },
          {
            new: true,
            runValidators: true,
          }
        );

        //send update Avatar
        res.status(200).json({
          status: 'success',
          updatedAvatar,
        });
      }
    }
  } catch (err) {
    console.log('upload error', err);
    res.status(500).json({
      errorMessage: `Server Error: ${err.message}`,
    });
  }
});

exports.getMe = catchAsync(async (req, res) => {
  const doc = req.user;

  let userData = {
    id: doc._id,
    firstName: doc.firstName,
    lastName: doc.lastName,
    email: doc.email,
    photo: doc.avatar.url,
    creditScore: doc.creditScore,
    passwordResetToken: doc.passwordResetToken,
    roles: doc.roles,
  };

  res.status(200).json({
    status: 'success',
    data: { userData },
  });
});
