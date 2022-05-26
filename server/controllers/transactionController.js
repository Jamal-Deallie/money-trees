const Transaction = require('./../models/transactionModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');


exports.getAllTransactions = factory.getAll(Transaction);
exports.getTransaction = factory.getOne(Transaction);
exports.createTransaction = factory.createOne(Transaction);
exports.updateTransaction = factory.updateOne(Transaction);
exports.deleteTransaction = factory.deleteOne(Transaction);

exports.getTransactionsBySearch = catchAsync(async (req, res) => {
  console.log('Query Working');
  const { term } = req.query;

  try {
    const query = new RegExp(term, 'i');

    const Transactions = await Transaction.find({
      $and: [
        {
          $or: [
            { merchant: query },
            { description: query },
            { description: query },
            { cashflow: query },
          ],
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
