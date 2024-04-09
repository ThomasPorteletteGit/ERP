import React from 'react';
import agrandir from '../assets/img/agrandir.png';

// à récup dans la bd
const stocks = [
    {
        id_produit_energie: 1,
        nom: 'Essence SP-95',
        prix: 1.50,
        quantite_stock: 1000,
        description: 'Carburant sans plomb 95',
        type: 'carburant'
    },
    {
        id_produit_energie: 2,
        nom: 'Essence SP-98',
        prix: 1.60,
        quantite_stock: 500,
        description: 'Carburant sans plomb 98',
        type: 'carburant'
    },
    {
        id_produit_energie: 3,
        nom: 'Gazole',
        prix: 1.40,
        quantite_stock: 750,
        description: 'Carburant diesel',
        type: 'carburant'
    },
    {
        id_produit_energie: 4,
        nom: 'GPL',
        prix: 0.80,
        quantite_stock: 400,
        description: 'Gaz de pétrole liquéfié',
        type: 'carburant'
    },
    {
        id_produit_energie: 5,
        nom: 'Lubrifiant moteur',
        prix: 15.99,
        quantite_stock: 100,
        description: 'Huile moteur synthétique 5W-30',
        type: 'lubrifiant'
    },
    {
        id_produit_energie: 6,
        nom: 'Antigel',
        prix: 4.99,
        quantite_stock: 200,
        description: 'Antigel pour moteur',
        type: 'accessoire'
    }
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
