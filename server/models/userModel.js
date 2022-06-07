const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcrypt');

const User = new Schema(
  {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    avatar: {
      type: Object,
      avatarImg: String,
      cloudinaryId: String,
    },
    roles: {
      user: {
        type: Number,
        default: 2003,
      },
      admin: Number,
    },
    creditScore: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordConfirm: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

User.virtual('transaction', {
  ref: 'Transactions',
  foreignField: 'user',
  localField: '_id',
});

//Function hashes password before its saved to the database, so the actual password is not saved to the database
//The is persisted between getting data and saving it to the database
User.pre('save', async function (next) {
  // Only run this function if password was actually modified
  //Does not run if the email is modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12 characters
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field, so its not saved to the database. Its only required in the input stage
  this.passwordConfirm = undefined;
  next();
});

//The instance method compares and confirms if the encrypted password matches the inputted password
User.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

User.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

User.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

User.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

User.methods.createPasswordResetToken = function () {
  //generate random token and convert to a hex string
  //We are going send the token to the user, so they can have it stored in the client
  //When they attempt to update their password, the server will provide access to that route by affirming the validity of the token
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model('User', User);
