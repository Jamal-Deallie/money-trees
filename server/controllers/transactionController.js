const Transactions = require('./../models/transactionModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const User = require('../models/userModel');

exports.getTransaction = factory.getOne(Transactions);

exports.updateTransaction = factory.updateOne(Transactions);
exports.deleteTransaction = factory.deleteOne(Transactions);

exports.getAllTransactions = catchAsync(async (req, res) => {

  try {
    const transactions = await Transactions.find({ user: req.user.id });

    res.status(200).json({
      status: 'success',
      results: transactions.length,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

exports.createTransaction = catchAsync(async (req, res) => {

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

  try {
    const query = new RegExp(term, 'i');

    const transactions = await Transactions.find({
      $and: [
        { $or: [{ party: query }, { cashFlow: query }, { category: query }] },
      ],
    });

    res.status(200).json({
      status: 'success',
      results: transactions.length,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
