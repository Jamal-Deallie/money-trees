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
  const { party, category, amount, cashFlow, date } = req.body;
  try {
    const transaction = await Transactions.create({
      party: party,
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
  const { term } = req.query;
  const user = req.user.id;

  try {
    const query = new RegExp(term, 'i');
    console.log(query);
    const Transactions = await User.findById(user)
      .populate('transaction')
      .find({
        $and: [
          {
            $or: [{ party: query }, { category: query }, { cashflow: query }],
          },
        ],
      });

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
