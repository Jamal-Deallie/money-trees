const User = require('../models/userModel');
const factory = require('./handlerFactory');

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);


exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

