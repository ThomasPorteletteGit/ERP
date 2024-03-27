const dao = require('../../data/DAO');

function getAllTransactions(req, res) {
    dao.select('*', 'Transaction', "", (result) => {
        res.send(result.rows);
    });
}

function getToValidateTransactions(req, res) {
    dao.select('*', 'Transaction', "WHERE date_validation IS NULL", (result) => {
        res.send(result.rows);
    });
}

function validateTransaction(req, res) {
    const id_transaction = req.body.id_transaction;
    dao.update("Transaction", "date_validation = NOW()", `id_transaction = ${id_transaction}`, (result) => {
        res.send(result);
    });
}

function getNewId(req, res) {
    dao.select('MAX(id_transaction)', 'TransactionJournaliere', "", (result) => {
        res.send(result.rows);
    });
}

function addTransaction(req, res) {
    const transaction = req.body.transaction;

    dao.insert("TransactionJournaliere", $`'${transaction.id_transaction}', NULL, '${transaction.montant_total}'`, (result) => {
        console.log(result);
    });

    dao.insert("Ticket", $`'${transaction.prix_total}', '${transaction.moyen_paiement}', 'NOW()', '${transaction.id_transaction}'`, (result) => {
        console.log(result);
    });

    const ticketId = 0;
    dao.select('MAX(id_ticket)', 'Ticket', "", (result) => {
        ticketId = result.rows[0].max;
    });

    transaction.produits.forEach(produit => {
        dao.insert("ProduitTicket", $`'${ticketId}', '${produit.id_produit}', '${produit.quantite_achetee}'`, (result) => {
            console.log(result);
        });
    });
}

function deleteTransaction(req, res) {
    let condition = "id = '" + req.body.id + "'";
    dao.delete('Ticket', condition, (result) => {
        res.send(result);
    });
}

module.exports = {
    getAllTransactions,
    getToValidateTransactions,
    validateTransaction,
    getNewId,
    addTransaction,
    deleteTransaction
};