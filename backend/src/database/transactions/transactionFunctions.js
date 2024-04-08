const dao = require('../../data/DAO');

function getAllTransactions(req, res) {
    dao.select('*', 'Transaction', "", (result) => {
        res.send(result.rows);
    });
}

function getToValidateTransactions(req, res) {
    dao.select('*', 'Transaction', "date_validation IS NULL", (result) => {
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
    let id_transaction_journaliere, ticketId;
  
    dao.insertWithoutId("TransactionJournaliere", 'date_validation, montant_total', `NULL, '${transaction.montant_total}'`, (result) => {
        dao.select('MAX(id_transaction)', 'TransactionJournaliere', '', (result) => {
            id_transaction_journaliere = result.rows[0].max;
            dao.insertWithoutId("Ticket",'prixTotal, moyen_paiement, date, id_transaction_journaliere' ,`'${transaction.montant_total}', '${transaction.moyen_paiement}', 'NOW()', '${id_transaction_journaliere}'`, (result) => {
                dao.select('MAX(id_ticket)', 'Ticket', "", (result) => {
                    ticketId = result.rows[0].max;
                    transaction.produits.forEach(produit => {
                        let produitId;
                        dao.select('id_produit_energie', 'ProduitEnergie', `nom_produit = '${produit.nom}'`, (result) => {
                            produitId = result.rows[0].id_produit;
                        });
                        dao.insert("TicketProduit", `'${ticketId}', '${produitId}', '${produit.quantity}'`, (result) => {
                            console.log(result);
                        });
                    });
                });
            });
        });
    });

    
    
   
    
  
   

    

    


   
}

function deleteTransaction(req, res) {
    let condition = "id_transaction = '" + req.body.id + "'";
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