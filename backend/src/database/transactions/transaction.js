const express = require('express');
const router = express.Router();

const {getAllTransactions, getToValidateTransactions, validateTransaction, getNewId, addTransaction, deleteTransaction, getAllTransactionsJoin} = require('./transactionFunctions');


router.get('/get', (req, res) => {
    getAllTransactionsJoin(req, res);
});

router.get('/toValidate', (req, res) => {
    getToValidateTransactions(req, res);
});

router.post('/validate', (req, res) => {
    validateTransaction(req, res);
});

router.post("/getNewId", (req, res) => {
    getNewId(req, res);
});

router.post('/add', (req, res) => {
    addTransaction(req, res);
});

router.delete('/delete', (req, res) => {
    deleteTransaction(req, res);
});

module.exports = router;
