const Transactions = require('./../models/transactionModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const User = require('../models/userModel');

exports.getTransaction = factory.getOne(Transactions);

exports.updateTransaction = factory.updateOne(Transactions);
exports.deleteTransaction = factory.deleteOne(Transactions);

exports.getAllTransactions = catchAsync(async (req, res) => {
  try {
    const user = req.user.id;
    const transaction = await User.findById(user).populate('transaction');

    res.status(200).json({
      status: 'success',
      results: transaction.length,
      transaction,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

exports.createTransaction = catchAsync(async (req, res) => {
  console.log(req);
  const { merchant, category, amount, cashFlow, date } = req.body;
  try {
    const transaction = await Transactions.create({
      merchant: merchant,
      category: category,
      amount: amount,
      cashFlow: cashFlow,
      date: date,
      user: req.params.id,
    });
    res.status(200).json({
      status: 'success',
      results: transaction.length,
      data: {
        transaction,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

exports.getTransactionsBySearch = catchAsync(async (req, res) => {
  console.log('Query Working');
  const { term } = req.query;
  const user = req.user.id;
  const transaction = await User.findById(user);

  try {
    const query = new RegExp(term, 'i');
    console.log(query);
    const Transactions = await Transactions.find({
      $and: [
        {
          $or: [{ merchant: query }, { category: query }, { cashflow: query }],
        },
      ],
    })
      .populate('transaction')
      .exec();

    const doc = Transactions;
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        doc,
      },
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// exports.deleteTransaction = catchAsync(async (req, res) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   } else if (req.cookies.jwt) {
//     token = req.cookies.jwt;
//   }

//   if (!token) {
//     return next(
//       new AppError('You are not logged in! Please log in to get access.', 401)
//     );
//   }

//   // 2) Verification token
//   const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

//   // 3) Check if user still exists
//   const currentUser = await User.findById(decoded.id);
//   if (!currentUser) {
//     return next(
//       new AppError(
//         'The user belonging to this token does no longer exist.',
//         401
//       )
//     );
//   }

//   const doc = await Transactions.findByIdAndDelete(req.params.id);
// });
