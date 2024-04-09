import React from 'react';
import { useState } from 'react';
import agrandir from '../../assets/img/agrandir.png';


const Transaction = ({transactions}) => {

    // sauvegarder les filtres
    // à récup dans la bd

    
    const getStatusColor = (statut) => {
        return statut == null ? 'red' : 'green';
    };

    const getPaymentTypeClass = (type) => {
        return type === 'cb' ? 'cb-payment' : type === 'esp' ? 'esp-payment' : '';
    };


    return (
        <section id="transaction">
            <div className="top_container">
                <h2 className='component-title'>💸 Transaction</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className='transaction-container'>
                <div className='last-transaction'>
                    <p>Dernière transaction</p>

                    <div className='input-select-container'>
                        <input type="date" id="datePicker" name="datePicker" />

                        <select id="typeTransaction" name="typeTransaction">
                            <option value="">Tous</option>
                            <option value="CB">CB</option>
                            <option value="ESP">ESP</option>
                        </select>
                    </div>
                </div>
                <div className='transaction-details'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Heure</th>
                                <th>Total</th>
                                <th>Type</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>
                                        <span className={`fleche-container ${transaction.isLoss ? 'loss' : 'no-loss'}`}>
                                            <span className="fleche" />
                                            {transaction.id_transaction}
                                        </span>
                                    </td>
                                    <td className='heures'>{transaction.date_validation}</td>
                                    <td className='prix-transac'>{transaction.montant_total}</td>
                                    <td>
                                        <span className={`payment-type ${getPaymentTypeClass(transaction.moyen_paiement.substring(0,3))}`}>
                                            {transaction.moyen_paiement}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`statut-transac ${getStatusColor(transaction.date_validation)}`}></span>
                                    </td>
                                </tr>
                            ))}
                            {
                            
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
export default Transaction;
