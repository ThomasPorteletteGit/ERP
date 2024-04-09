import React, { useState } from "react";

// Données de transaction à récupérer dans la base de données
const transactionsData = [
    { id_transaction: 1, date: '2024-03-01', quantité: 'Problème de pompe', prix: 20, statut: "En cours..." },
    { id_transaction: 2, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé" },
    { id_transaction: 3, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé" },
    { id_transaction: 3, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé" },
    { id_transaction: 3, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé" },
    
];

const transactionsDataAConfirmer = [
    { id_transaction: 1, date: '2024-03-01', quantité: 'Problème de pompe', prix: 20, statut: "En cours..." },
    { id_transaction: 2, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé" },
    { id_transaction: 3, date: '2024-03-02', quantité: 'Fuite de carburant', prix: 1, statut: "Terminé" },
];

const TransactionGrand = () => {

    const [transactions, setTransactions] = useState(transactionsData);
    const [transactionsAConfirmer, setTransactionsAConfirmer] = useState(transactionsDataAConfirmer);

    const handleConfirm = (transaction) => {
        setTransactions([...transactions, transaction]);
        setTransactionsAConfirmer(prevTransactions => prevTransactions.filter(item => item !== transaction));
    };

    const handleDelete = (transaction) => {
        setTransactionsAConfirmer(prevTransactions => prevTransactions.filter(item => item !== transaction));
    };

    return (
        <div className='container-composantGrandTransaction'>
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title2">💸 Transactions</h2>
                </div>
            </div>
            <div className="separator"></div>
            <div className="composantGrandTransaction">
                <div className="left-container-transaction">
                    <h3>Informations des transactions</h3>
                    <ul className="ul-transaction">
                        {transactions.map((transaction, index) => (
                            <li key={index}>
                                <strong>Transaction n°</strong> {transaction.id_transaction}<br />
                                <div className="separatorBlack"></div>
                                <strong>Quantité :</strong> {transaction.quantité} <br />
                                <strong>Total à payer :</strong> {transaction.prix} <span className="currency">euros</span> <br />
                                <strong>Paiement :</strong> {transaction.statut}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="separatorColumn"></div>
                <div className="right-container-transaction">
    <h3>Informations des transactions à confirmer</h3>
    <div className="ListeTransactionAConfirmer" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
        <ul className="ul-transaction">
            {transactionsAConfirmer.map((transaction, index) => (
                <div className="transaction-list-container" key={index}>
                    <div className="transaction-item">
                        <li>
                            <strong>Transaction n°</strong> {transaction.id_transaction}<br />
                            <div className="separatorBlack"></div>
                            <strong>Date de validation :</strong> {transaction.date}<br />
                            <strong>Montant total boutique :</strong> {transaction.prix} <span className="currency">euros</span><br />
                            <strong>Montant total énergie :</strong> {transaction.prix} <span className="currency">euros</span><br />
                            <strong>Montant total :</strong> {transaction.prix} <span className="currency">euros</span><br/>
                            <p></p>
                            <button className="confirm-button" onClick={() => handleConfirm(transaction)}>Valider</button>
                            <button className="delete-button" onClick={() => handleDelete(transaction)}>Annuler</button>
                        </li>
                    </div>
                </div>
            ))}
        </ul>
    </div>
</div>

            </div>
        </div>
    );
};

export default TransactionGrand;
