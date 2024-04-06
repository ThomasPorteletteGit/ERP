import React from 'react';
import Header from '../Header';

const ChoixPaiement = () => {

    // articles scannés à récupérer
    const articles = [
        { id: 1, name: 'Article 1', price: '14,99€' },
        { id: 1, name: 'Article 1', price: '14,99€' },
        { id: 1, name: 'Article 1', price: '14,99€' }
    ];
    
    return (
        <>
            <Header />
            <div className='panier'>
                <h1 className='view-title'>🛒 Panier</h1>

                <div className='panier-conteneur'>
                    <div className='shopping-cart-left'>
                        {articles.map(article => (
                            <div className='article' key={article.id}>
                                <div className='article-img'>
                                    <img src='https://via.placeholder.com/150' alt={`article ${article.id}`} />
                                </div>
                                <div className='article-info'>
                                    <h2>{article.name}</h2>
                                    <p>Prix : {article.price}</p>
                                </div>
                                <div className='article-quantity'>
                                    <button className='qteBtn'>-</button>
                                    <p>1</p>
                                    <button className='qteBtn'>+</button>
                                </div>
                            </div>
                        ))}
                        <div className="barre-de-recherche-panier">
                            <input type="text" placeholder="Rechercher un produit " />
                        </div>

                    </div>

                    <div className='shopping-cart-right'>

                    <div className="clavier-numerique-panier">
                        <table>
                            <tr>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>{"<"}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td rowSpan={2}>Entrer</td>
                            </tr>
                            <tr>
                                <td>0</td>
                                <td>,</td>
                                <td>{",00"}</td>
                            </tr>
                        </table>
                    
                    </div>
                        <div className='proceed-payment'>
                            <p>Prix total : xx € </p>
                            <button>Paiement 💵</button>
                        </div>
                    </div>

                   
                </div>
            </div>
        </>
    );
}

export default ChoixPaiement;
