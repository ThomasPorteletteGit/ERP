import React from 'react';

const Transaction = () => {

    // à récup dans la bd
    const transactions = [
        { id: 1, heure: '12:30', total: 50, type: 'CB', statut: 'Validé' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
        { id: 2, heure: '15:45', total: 20, type: 'Espèce', statut: 'En attente' },
    ];

    // permet de récup la couleur en fonction du statut
    const getStatusColor = (statut) => {
        return statut === 'Validé' ? 'green' : 'red';
    };

    return (
        <section id="transaction">
            <h2 className='component-title'>Transaction</h2>
            <div className='transaction-container'>
                <div className='last-transaction'>
                    <p>Dernière transaction</p>

                    <input type="date" id="datePicker" name="datePicker" />

                    <select id="typeTransaction" name="typeTransaction">
                        <option value="cb">CB</option>
                        <option value="espece">Espèce</option>
                    </select>

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
                                    <td>{transaction.id}</td>
                                    <td>{transaction.heure}</td>
                                    <td>{transaction.total}</td>
                                    <td>{transaction.type}</td>
                                    <span className={`statut-transac ${getStatusColor(transaction.statut)}`}></span>                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Transaction;
