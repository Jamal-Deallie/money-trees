const express = require('express');
const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.protect);

router.route('/').get(transactionController.getAllTransactions);
router.route('/search').get(transactionController.getTransactionsBySearch);
router
  .route('/:id')
  .get(transactionController.getTransaction)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction)
  .post(transactionController.createTransaction);

module.exports = router;
