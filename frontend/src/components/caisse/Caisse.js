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
];

const ChoixPaiement = () => {
    const [inputValue, setInputValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [resultDisplayed, setResultDisplayed] = useState(false);
    const [showFirstCaisse, setShowFirstCaisse] = useState(true);

    const handleButtonClick = (value) => {
        if (resultDisplayed) {
            setInputValue(value.toString());
            setResultDisplayed(false);
        } else {
            setInputValue((prevValue) => prevValue + value);
        }
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

    const handleEqualsClick = () => {
        if (inputValue !== '' && previousValue !== '') {
            const inputNumber = parseFloat(inputValue);
            const previousNumber = parseFloat(previousValue);
            let result = 0;
            switch (operator) {
                case '+':
                    result = previousNumber + inputNumber;
                    break;
                case '-':
                    result = previousNumber - inputNumber;
                    break;
                case '*':
                    result = previousNumber * inputNumber;
                    break;
                case '/':
                    result = previousNumber / inputNumber;
                    break;
                default:
                    break;
            }
            setInputValue(result.toString());
            setPreviousValue('');
            setOperator('');
            setResultDisplayed(true);
        }
    };

    const handleSwitchClick = () => {
        setShowFirstCaisse(!showFirstCaisse);
    };

    return (
        <div className="caisse-container">
            <div id="caisse">
                <div className="caisseTitre">
                    <h2>🛒 Caisse</h2>
                </div>
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
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
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
                <div className="switch_button">
                    <button id="switchbtn" className="button_style" onClick={() => handleSwitchClick()}>SWITCH</button>
                </div>
                <div class="caisse2-container"> 
                    {showFirstCaisse ? (
                          <>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Recherche..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Quantité"
                            value={inputQuantity}
                            onChange={(e) => setInputQuantity(e.target.value)}
                        />
                        <button onClick={() => setInputValue('')} className="button_style">Effacer</button>
                        <button onClick={() => setInputValue('')} className="button_style">Rechercher</button>
                    </div>
                    <div className="numeric-buttons">
                        {[1, 2, 3].map((number) => (
                            <button key={number} onClick={() => handleButtonClick(number)}>
                                {number}
                            </button>
                        ))}
                        <button onClick={() => handleOperatorClick('+')}>+</button>
                        {[4, 5, 6].map((number) => (
                            <button key={number} onClick={() => handleButtonClick(number)}>
                                {number}
                            </button>
                        ))}
                        <button onClick={() => handleOperatorClick('-')}>-</button>
                        {[7, 8, 9].map((number) => (
                            <button key={number} onClick={() => handleButtonClick(number)}>
                                {number}
                            </button>
                        ))}
                        <button onClick={() => handleOperatorClick('*')}>x</button>
                        <button onClick={() => setInputValue('.')}>.</button>
                        <button key={0} onClick={() => handleButtonClick(0)}>
                            {0}
                        </button>
                        <button onClick={handleEqualsClick}>=</button>
                        <button onClick={() => handleOperatorClick('/')}>/</button>
                    </div>
                    </>
                     ) : (
                        <>
                            <h2>🚗 Carburant</h2>
                            <div className="caisse-carburant">

                                <select id="carburant" name="carburant">
                                <option value="SP-95">SP-95</option>
                                <option value="SP-98l">SP-98</option>
                                <option value="gazole">Gazole</option>
                                <option value="gpl">GPL</option>
                                <option value="electrique">Elec</option>
                                <option value="E85">E85</option>
                                </select>
                            
                                <input type="number" id="quantite" name="quantite" placeholder="Quantité en litres" />

                                <button id="calculer" className="button_style">Calculer</button>
                                
                                <p id='prix'>Ici calculer le prix avec la bd</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChoixPaiement;
