import React from 'react';
import agrandir from '../assets/img/agrandir.png';

// à récup dans la bd
const stocks = [
    { id: 1, carburant: 'SP-95', quantite: 1000 },
    { id: 2, carburant: 'SP-98', quantite: 500 },
    { id: 3, carburant: 'Gazole', quantite: 750 },
    { id: 4, carburant: 'GPL', quantite: 400 },
    { id: 4, carburant: 'GPL', quantite: 400 }
];

const Stocks = () => {
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
                        <p>{stock.carburant}</p>
                        <p>{stock.quantite}L</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stocks;
