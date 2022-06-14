const mongoose = require('mongoose');
const validator = require('validator');

const Transactions = new mongoose.Schema({
  party: {
    type: String,
    required: [true, 'Please Enter the Transacting Party'],
  },
  category: {
    type: String,
    enum: [
      'Income',
      'Bills & Utilities',
      'Food & Dining',
      'Entertainment',
      'Health & Fitness',
      'Personal Care',
      'Pets',
      'Shopping',
      'Misc Expenses',
      'Uncategorized',
      'Travel',
    ],
    required: [true, 'Select the category'],
  },
  amount: {
    type: Number,
    required: [true, 'Enter the transaction amount'],
  },
  cashFlow: {
    type: String,
    enum: ['debit', 'credit'],
    required: [true, 'Select the transaction Flow'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    trim: true,
    default: '',
    required: [true, 'Please Enter the Date of Transaction'],
  },

  submittedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transactions', Transactions);
