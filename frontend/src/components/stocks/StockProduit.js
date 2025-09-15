import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import StockProduitAjouter from "./StockProduitAjouter";
import image from '../../assets/img/tomdelacote.png';


const StockProduit = ({ stocks }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [newProductName, setNewProductName] = useState('');
    const [newProductImage, setNewProductImage] = useState('');


    document.addEventListener("click", function (event) {
        if(event.target.className === "ajouterProduitbouton"){
            const divGeneral = document.getElementById("stockGrandProduit");
            divGeneral.innerHTML = ReactDOMServer.renderToString(<StockProduitAjouter />);
        }
    });


    return (
        <div className="StokProduitContainer" id='stockGrandProduit'>
            <button className="ajouterProduitbouton">Ajouter un nouveau produit</button>
            <input
                className='barreProduit'
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}

            />
            <div className="imagesContainer">
                {stocks.length > 0 ? (
                    stocks.map((product, index) => (
                        <div key={index} className="imageItem">
                            <p>{product.nom}</p>
                            <p>{product.quantite_stock}</p>
                        </div>
                    ))
                ) : (
                    <div className="noProductsMessage">Aucun produit trouvé</div>
                )}
            </div>
        </div>
    );
};

export default StockProduit;