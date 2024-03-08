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

/**
 *  Insertion d'une transaction
    -1 Il faut ajouter une transaction journalière
    -2 Il faut ajouter un ticket qui va référencer la transaction journalière
    -3 Selectionner les pdts et les quantités de la transaction
    -4 Ajouter les pdts et les quantités dans le ticket
 */
router.post('/addTransaction', (req, res) => {
    
});
