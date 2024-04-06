import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server'
import StockProduitAjouter from "./StockProduitAjouter";

const StockProduit = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProductName, setNewProductName] = useState('');
    const [newProductImage, setNewProductImage] = useState('');

    document.addEventListener("click", function (event) {
        
    if (event.target.classList.contains("ajouterProduitbouton")) {           
        const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Ajouter un nouveau produit":
                    document.getElementById("stockGrandProduit").innerHTML = ReactDOMServer.renderToString(<StockProduitAjouter/>);
                    break;
            }
        }
    });

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddProduct = () => {
        // Ajoutez ici la logique pour ajouter un nouveau produit
        // Par exemple, vous pouvez utiliser une fonction passée depuis le composant parent pour effectuer cette tâche.
    };

    return (
        <div className="StokProduitContainer" id='stockGrandProduit'>
            <button className="ajouterProduitbouton">Ajouter un nouveau produit</button>
            <input
                className='barreProduit'
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={handleChange}
            />
            <div className="imagesContainer">
                {products && products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} className="imageItem">
                            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                            <p>{product.name}</p>
                        </div>
                    ))
                ) : (
                    <div className="noProductsMessage">Aucun produit disponible</div>
                )}
            </div>
            {showAddProductForm && (
                <div>
                    <input
                        type="text"
                        placeholder="Nom du nouveau produit"
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="URL de l'image du nouveau produit"
                        value={newProductImage}
                        onChange={(e) => setNewProductImage(e.target.value)}
                    />
                    <button onClick={handleAddProduct}>Ajouter</button>
                </div>
            )}
        </div>
    );
};

export default StockProduit;
