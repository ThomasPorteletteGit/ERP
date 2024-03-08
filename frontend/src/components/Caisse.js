import React, { useState } from 'react';

const transactions = [
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    { nom: 1, quantity: 2, price: '25.25' },
    { nom: 2, quantity: 3, price: '10.00' },
    { nom: 3, quantity: 1, price: '5.50' },
    // Add more transactions as needed
];

const ChoixPaiement = () => {
    const [inputValue, setInputValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');

    const handleButtonClick = (value) => {
        setInputValue((prevValue) => prevValue + value);
    };

    const handleOperatorClick = (op) => {
        if (inputValue !== '') {
            setPreviousValue(inputValue);
            setOperator(op);
            setInputValue('');
        }
    };

    const calculateTotal = () => {
        const total = transactions.reduce(
            (acc, transaction) =>
                acc + transaction.quantity * parseFloat(transaction.price),
            0
        );
        return total.toFixed(2);
    };

    const calculateTotalQuantity = () => {
        return transactions.reduce((acc, transaction) => acc + transaction.quantity, 0);
    };

    return (
        <div className="caisse-container">
            <div id="caisse">
                <h1>Caisse</h1>
                <hr className="separator" />
                <div className="caisse-details">
                    <table>
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.nom}</td>
                                    <td>{transaction.quantity}</td>
                                    <td>{transaction.price}€</td>
                                    <td>
                                        {(transaction.quantity * parseFloat(transaction.price)).toFixed(2)}€
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="total">
                <p>Total: {calculateTotal()}€ | Nombre d'articles: {calculateTotalQuantity()}</p>
                </div>
                <hr className="separator" />
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Recherche..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="numeric-buttons">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                        <button key={number} onClick={() => handleButtonClick(number)}>
                            {number}
                        </button>
                    ))}
                    <button onClick={() => setInputValue('.')}>.</button>
                    <button key={0} onClick={() => handleButtonClick(0)}>
                        {0}
                    </button>
                    <button onClick={() => setInputValue('')}>C</button>

                </div>
                <div className="input-display">
                    <p>{inputValue}€</p>
                </div>
            </div>
        </div>
    );
};

export default ChoixPaiement;
