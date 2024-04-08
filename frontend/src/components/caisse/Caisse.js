import React, { useState } from 'react';
import instance from '../misc/Singleton';

const ChoixPaiement = ({energies}) => {
    const [transactions, setTransactions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [energyValue, setEnergyValue] = useState('');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [resultDisplayed, setResultDisplayed] = useState(false);
    const [showFirstCaisse, setShowFirstCaisse] = useState(true);

    const searchArticle = async ({article, type}) => {
        let result;
        switch (type) {
            case 'produit':
                await fetch(`/stockProduits/get/${article}`)
                    .then((response) => response.json())
                    .then((data) => {
                        result = data;
                    });
                break;
            case 'energie':
                article = document.getElementById("carburant").value;
                await fetch(`/stockEnergie/get/${article}`)
                    .then((response) => response.json())
                    .then((data) => {
                        result = data;
                    });
                break;
            default:
                break;
        }
        
        return result;
    };

    const addArticle = ({article}) => {
        article = article[0];
        if (article !== undefined) {
            const newTransaction = {
                nom: article.nom,
                quantity: inputQuantity,
                price: article.prix
            };
            setTransactions(previous => [...previous, newTransaction]);
            instance.addProduit(newTransaction);
        }
    };

    const addEnergie = ({energie}) => {
        console.log(energie);
        energie = energie[0];
        if (energie !== undefined) {
            const newTransaction = {
                nom: energie.nom,
                quantity: energyValue,
                price: energie.prix
            };
            setTransactions(previous => [...previous, newTransaction]);
            instance.addProduit(newTransaction);
        }
    };
    

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

    const deleteProduct = (button) => {
        let row = button.parentNode.parentNode;
        let name = row.cells[0].innerHTML;
        let quantity = row.cells[1].innerHTML;
        let price = row.cells[2].innerHTML;
        let total = row.cells[3].innerHTML;
        let newTransactions = transactions.filter((transaction) => transaction.nom !== name);
        setTransactions(newTransactions);
        instance.removeProduit({nom:name, quantity:quantity, price:price});
        instance.setPrixTotal(instance.getPrixTotal() - parseFloat(total));
        instance.setPrixAffiche(instance.getPrixAffiche() - parseFloat(total));
    }


    const calculateTotal = () => {
        const total = transactions.reduce(
            (acc, transaction) =>
                acc + transaction.quantity * parseFloat(transaction.price),
            0
        );
        instance.setPrixTotal(total);
        instance.setPrixAffiche(total);
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
                        <tbody id="contenuCaisse">
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
                        <button onClick={async () => {
                            let article = await searchArticle({article:inputValue, type:"produit"});
                            addArticle({article});
                            }
                    }    className="button_style">Rechercher</button>
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
                                    {energies.map((energie) => (
                                        <option key={energie.id_produit_energie} value={energie.id_produit_energie}>
                                            {energie.nom}
                                        </option>
                                    ))}
                                </select>
                            
                                <input type="number" id="quantite" name="quantite" placeholder="Quantité en litres" onChange={(e) => {
                                    setEnergyValue(e.target.value);
                                }}/>

                                <button id="calculer" className="button_style" onClick={ async () => {
                                    let energie = await searchArticle({article:inputValue, type:"energie"});
                                    addEnergie({energie});
                                }}>Calculer</button>
                                
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
