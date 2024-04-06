import React from 'react';
import { useState } from 'react';
import agrandir from '../assets/img/agrandir.png';


const Transaction = () => {

    // sauvegarder les filtres
    const [transactionType, setTransactionType] = useState(''); 
    const [transactionDate, setTransactionDate] = useState(''); 

    // à récup dans la bd
    const transactions = [
        { id: 1, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 3, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 4, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 5, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 6, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 7, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 8, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 9, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 10, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 11, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 12, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 13, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 14, heure: '12:30', total: '50,50€', type: 'CB', statut: 'Validé', isLoss: false },
    ];
    
    const getStatusColor = (statut) => {
        return statut === 'Validé' ? 'green' : 'red';
    };

    const getPaymentTypeClass = (type) => {
        return type === 'CB' ? 'cb-payment' : type === 'ESP' ? 'esp-payment' : '';
    };

    const handleTransactionTypeChange = (e) => {
        setTransactionType(e.target.value);
    };

    const handleTransactionDateChange = (e) => {
        setTransactionDate(e.target.value);
    };

    const filteredTransactions = transactions.filter(transaction => {
        if (transactionType && transaction.type !== transactionType) {
            return false;
        }
        if (transactionDate && transaction.heure.split(' ')[0] !== transactionDate) {
            return false;
        }
        return true;
    });

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
                        <input type="date" id="datePicker" name="datePicker" onChange={handleTransactionDateChange} />

                        <select id="typeTransaction" name="typeTransaction" onChange={handleTransactionTypeChange}>
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
                            {filteredTransactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>
                                        <span className={`fleche-container ${transaction.isLoss ? 'loss' : 'no-loss'}`}>
                                            <span className="fleche" />
                                            {transaction.id}
                                        </span>
                                    </td>
                                    <td className='heures'>{transaction.heure}</td>
                                    <td className='prix-transac'>{transaction.total}</td>
                                    <td>
                                        <span className={`payment-type ${getPaymentTypeClass(transaction.type)}`}>
                                            {transaction.type}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`statut-transac ${getStatusColor(transaction.statut)}`}></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
export default Transaction;
