const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.route('/').get(transactionController.getAllTransactions);
router.get('/search', transactionController.getTransactionsBySearch);

router
  .route('/:id')
  .get(transactionController.getTransaction)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction)
  .post(transactionController.createTransaction);

module.exports = router;
