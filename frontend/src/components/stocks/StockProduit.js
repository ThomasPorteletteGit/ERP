import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import StockProduitAjouter from "./StockProduitAjouter";
import image from '../../assets/img/tomdelacote.png';

const exampleProducts = [
    { name: 'Produit 1', image: image },
    { name: 'Produit 2', image: image },
    { name: 'Produit 3', image: image },
    { name: 'Produit 1', image: image },
    { name: 'Produit 2', image: image },
    { name: 'Produit 3', image: image },
    { name: 'Produit 1', image: image },
    { name: 'Produit 2', image: image },
    { name: 'Produit 3', image: image },
    { name: 'Produit 1', image: image },
    { name: 'Produit 2', image: image },
    { name: 'Produit 3', image: image },
    { name: 'Produit 1', image: image },
    { name: 'Produit 2', image: image },
    { name: 'Produit 3', image: image },
    { name: 'Produit 1', image: image },
    { name: 'Produit 2', image: image },
    { name: 'Produit 3', image: image },
    // Ajoutez autant de produits que nécessaire
];

const StockProduit = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProductName, setNewProductName] = useState('');
    const [newProductImage, setNewProductImage] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddProduct = () => {
        // Ajoutez ici la logique pour ajouter un nouveau produit
        // Par exemple, vous pouvez utiliser une fonction passée depuis le composant parent pour effectuer cette tâche.
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="StokProduitContainer" id='stockGrandProduit'>
            <button className="ajouterProduitbouton">Ajouter un nouveau produit</button>
            <input
                className='barreProduit'
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="imagesContainer">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="imageItem">
                            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                            <p>{product.name}</p>
                        </div>
                    ))
                ) : (
                    <div className="noProductsMessage">Aucun produit trouvé</div>
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

const App = () => {
    return (
        <div>
            <h1>Stock des produits</h1>
            <StockProduit products={exampleProducts} />
        </div>
    );
};

export default App;
