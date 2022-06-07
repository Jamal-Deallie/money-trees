const User = require('../models/userModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');


let path = require('path');

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

  const { path } = req.file;
  //filter object, so only the eligible fields listed below are updated
  const filteredBody = filterObj(
    req.body,
    'firstName',
    'lastName',
    'email',
    'creditScore'
  );
  //update user document

  console.log(filteredBody);

  let updatedUser;

  if (path) {
    console.log('path checked');
    //find user
    let user = await User.findById(req.user.id);
    //delete previous avatar
    await cloudinary.uploader.destroy(user.avatar.cloudinary_id);
    //upload new avatar
    const result = await cloudinary.uploader.upload(req.file.path);

    const data = {
      filteredBody,
      avatar: {
        profile_img: result.secure_url,
        cloudinary_id: result.public_id,
      },
    };

    updatedUser = await User.findByIdAndUpdate(req.user.id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true,
    });
  }

  //send update user
  res.status(200).json({
    status: 'success',
    updatedUser,
  });
});
