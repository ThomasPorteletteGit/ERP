import React from 'react';
import agrandir from '../assets/img/agrandir.png';

const Stocks = ({stocks}) => {
    return (
        <section id="stocks">
            <div className="top_container">
                <h2 className='component-title'>📦 Stocks</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="stocks-container">
                {/* on boucle sur tous les stocks */}
                {stocks.map((stock, index) => (
                    <div key={index} className="stock">
                        <div className="stockNomType">
                            <div className="nomStock test">Nom : {stock.nom}</div>
                            <div className="typeStock test">Type : {stock.type}</div>
                        </div>
                        <div className="descriptionStock">Description : {stock.description}</div>
                        <div className="stockNomType">
                            <div className="prixStock test">Prix : {stock.prix} €</div>
                            <div className="quantiteStock test">Quantité : {stock.quantite_stock}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stocks;
