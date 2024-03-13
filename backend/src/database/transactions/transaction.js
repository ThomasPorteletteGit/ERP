const express = require('express');

const router = express.Router();
const DAO = require('../../data/DAO');
const dao = new DAO();

router.get('/getTransactions', (req, res) => {
    dao.select('*', 'Ticket', "", (result) => {
        res.send(result.rows);
    });
});

router.get('/getTransactionForValidation', (req, res) => {
    dao.select('*', 'Ticket', "WHERE date_validation IS NULL", (result) => {
        res.send(result.rows);
    });
});

router.post('/validateTransaction', (req, res) => {
    const id_transaction = req.body.id_transaction;
    dao.update("Ticket", "date_validation = NOW()", `id_transaction = ${id_transaction}`, (result) => {
        res.send(result);
    });
});

router.post("/getNewIdTransaction", (req, res) => {
    dao.select('MAX(id_transaction)', 'TransactionJournaliere', "", (result) => {
        res.send(result.rows);
    });
});

/**
 *  Insertion d'une transaction
    -1 Il faut ajouter une transaction journalière
    -2 Il faut ajouter un ticket qui va référencer la transaction journalière
    -3 
 */
router.post('/addTransaction', (req, res) => {
    const transaction = req.body.transaction;

    dao.insert("TransactionJournaliere", $`'${transaction.id_transaction}', NULL, '${transaction.montant_total}'`, (result) => {
        console.log(result);
    });

    dao.insert("Ticket", $`'${transaction.prix_total}', '${transaction.moyen_paiement}', 'NOW()', '${transaction.id_transaction}'`, (result) => {
        console.log(result);
    });



    
});
