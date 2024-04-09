import React, { useState } from "react";

// Données de transaction à récupérer dans la base de données

const TransactionGrand = ({transactions}) => {
    const transactionsValides = transactions.filter(transaction => transaction.date_validation != null);
    const transactionsNonValides = transactions.filter(transaction => transaction.date_validation == null);

    document.addEventListener("click", function(e) {
        if (e.target.className == "confirm-button Transaction") {
            const id = e.target.parentElement.parentElement.parentElement.id;
            handleValidation(id);
        }
    });

    const handleValidation = async (id) => {
        const data = {
            id_transaction: id
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch('/transaction/validate',options)
    }
        
    return (
        <div className='container-composantGrandTransaction'>
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title2">💸 Transaction</h2>
                </div>
            </div>
            <div className="separator"></div>
            <div className="composantGrandTransaction">
                <div className="left-container-transaction">
                    <h3>Informations des transactions</h3>
                    <ul className="ul-transaction">
                        {transactionsValides.map((transaction, index) => (
                            <li id={transaction.id_transaction+"transaction"}>
                                <strong>Transaction n°</strong> {transaction.id_transaction},<br />
                                <div className="separatorBlack"></div>
                                <strong>Total</strong> {transaction.montant_total} <span className="currency">euros</span>,<br />
                            </li>
                        ))}
        
                    </ul>
                </div>
                <div className="separatorColumn"></div>
                <div className="right-container-transaction">
                    <h3>Informations des transactions à confirmer</h3>
                    <ul className="ul-transaction">
                        {transactionsNonValides.map((transaction, index) => (
                            <div className="transaction-list-container">
                                <div className="transaction-list-container" id={transaction.id_transaction}>
                                    <div className="transaction-item">
                                        <li>
                                            <strong>Transaction n°</strong> {transaction.id_transaction},<br />
                                            <div className="separatorBlack"></div>
                                            <strong>Date de validation :</strong> {transaction.date_validation},<br />
                                            <strong>Montant total boutique :</strong> {transaction.montant_total} <span className="currency">euros</span>,<br />
                                            <strong>Montant total énergie :</strong> {transaction.montant_total} <span className="currency">euros</span>,<br />
                                            <strong>Montant total :</strong> {transaction.montant_total} <span className="currency">euros</span>,<br />
                                            <p></p>
                                            <button className="confirm-button Transaction">Valider</button>
                                            <button className="delete-button Transaction">Annuler</button>
                                        </li>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TransactionGrand;
