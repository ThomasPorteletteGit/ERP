import React from 'react';
import horloge from '../assets/img/lhorloge.png';

const Transaction = () => {

    // à récup dans la bd
    const transactions = [
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
        { id: 2, heure: '15:45', total: '20,05€', type: 'ESP', statut: 'En attente', isLoss: true },
        { id: 1, heure: '12:30', total: '50,50', type: 'CB', statut: 'Validé', isLoss: false },
    ];


    // permet de récup la couleur en fonction du statut
    const getStatusColor = (statut) => {
        return statut === 'Validé' ? 'green' : 'red';
    };

    const getPaymentTypeClass = (type) => {
        return type === 'CB' ? 'cb-payment' : type === 'ESP' ? 'esp-payment' : '';
    };

    return (
        <section id="transaction">
            <div className="top_container">
                <h2 className='component-title'>💸 Transaction</h2>
            </div>
            <div className='transaction-container'>
                <div className='last-transaction'>
                    <p>Dernière transaction</p>

                    <div className='input-select-container'>
                        <input type="date" id="datePicker" name="datePicker" />

                        <select id="typeTransaction" name="typeTransaction">
                            <option value="cb">CB</option>
                            <option value="espece">ESP</option>
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
                                            {transaction.id}
                                        </span>
                                    </td>
                                    <td className='prix-transac'>{transaction.total}</td>
                                    <td>
                                        <span className={`payment-type ${getPaymentTypeClass(transaction.type)}`}>
                                            {transaction.type}
                                        </span>
                                    </td>
                                    <td><span className={`statut-transac ${getStatusColor(transaction.statut)}`}></span>       </td>                     </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Transaction;
