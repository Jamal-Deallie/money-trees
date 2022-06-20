const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const crypto = require('crypto');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('../utils/email');
const { promisify } = require('util');
const cloudinary = require('cloudinary');

const signToken = id => {
  //get the id of the user that's created by mongoDB
  //the secret PW is from .env
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    //confirms when the token expires using the .env file
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  });
};

// Register User Controller
exports.signup = catchAsync(async (req, res, next) => {

  //abstract items from body
  const {
    firstName,
    lastName,
    creditScore,
    email,
    password,
    passwordConfirm,
    avatar,
  } = req.body;
  //if required items are undefined send error
  if (!email || !password || !passwordConfirm || !firstName || !creditScore) {
    return next(new AppError('Please complete all required fields!', 400));
  }

  const user = await User.findOne({ email });
  //check if user exist send a failed 409 message
  if (user) {
    return next(new AppError('The email already exists', 409));
  }

  try {
    let newUser;
    //if the avatar is included upload to cloudinary
    if (avatar) {
      const uploadedRes = await cloudinary.uploader.upload(avatar, {
        upload_preset: 'money-tree-avatar',
      });

      if (uploadedRes) {
        newUser = await User.create({
          firstName: firstName,
          lastName: lastName,
          creditScore: creditScore,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          avatar: uploadedRes,
        });
      } else {
        newUser = await User.create({
          firstName: firstName,
          lastName: lastName,
          creditScore: creditScore,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
        });
      }
    }

    createSendToken(newUser, 201, req, res);
  } catch (err) {
    console.log('signup error', err);
    res.status(500).json({
      errorMessage: `Server Error: ${err.message}`,
    });
  }
});

exports.signin = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');
  const correctPassword = await user.correctPassword(password, user.password);

  //since the password is encrypted via bcrypt the correctPassword function can confirm the hashed PW matches the inputted PW
  if (!user || !correctPassword) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything ok, send token to client
  //   createSendToken(user, 200, req, res);
  createSendToken(user, 200, req, res);
});

//function to restrict access to non-admin users
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin' plus more]
    //if the role is not equal to admin, then we dont give permission to access route
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {

  //1 Get User based on posted Email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  //2 Generate the random token and
  const resetToken = user.createPasswordResetToken();

  await user.save({ validateBeforeSave: false }); //this disregards all validation requirements

  //3 send it to the user's email
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1users/resetPassword/${resetToken}`;

  const message = `To reset password, please enter your new password and password confirm to: ${resetURL}.\n If you didn't reset your password please contact us`;
  try {
    await sendEmail({
      email: user.email,
      subject: 'Please reset your password',
      message: message,
    });
    res.status(200).json({
      status: 'success',
      message: 'Token sent to email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false }); //this disregards all validation requirements

    return next(
      new AppError(
        'There was an error resetting your password. Please try again later',
        500
      )
    );
  }
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: 'success' });
};

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) Check if current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});


exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']. role='user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};
