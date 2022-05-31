const express = require('express');
const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(authController.protect, transactionController.getAllTransactions);
router.get('/search', authController.protect, transactionController.getTransactionsBySearch);

router
  .route('/:id')
  .get(transactionController.getTransaction)
  .patch(transactionController.updateTransaction)
  .delete(authController.protect, transactionController.deleteTransaction)
  .post(transactionController.createTransaction);

module.exports = router;
