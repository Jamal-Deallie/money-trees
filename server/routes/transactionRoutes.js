const express = require('express');
const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/')
  .get(authController.protect, transactionController.getAllTransactions);
router.get('/search', transactionController.getTransactionsBySearch);

const { protect } = router
  .route('/:id')
  .get(transactionController.getTransaction)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction)
  .post(transactionController.createTransaction);

module.exports = router;
