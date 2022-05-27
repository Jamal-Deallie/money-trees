const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const Transactions = new mongoose.Schema({
  merchant: {
    type: String,
    required: [true, 'Please Enter the Merchant Name'],
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
  cashflow: {
    type: String,
    enum: ['debit', 'credit'],
    required: [true, 'Select the transaction Flow'],
  },
  description: {
    type: String,
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
  //   user: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: 'User',
  //     required: [true, 'You must be signed'],
  //   },
  submittedDate: { type: Date, default: Date.now },
});



module.exports = mongoose.model('Transactions', Transactions);
