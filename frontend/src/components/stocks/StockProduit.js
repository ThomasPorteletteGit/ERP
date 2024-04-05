import React, { useState } from 'react';

const StockProduit = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProductName, setNewProductName] = useState('');
    const [newProductImage, setNewProductImage] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddProduct = () => {
        // Ajoutez ici la logique pour ajouter un nouveau produit
        // Par exemple, vous pouvez utiliser une fonction passée depuis le composant parent pour effectuer cette tâche.
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className = "ajouterProduitbouton" onClick={() => setShowAddProductForm(true)}>Ajouter un nouveau produit</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products && products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} style={{ width: '25%', padding: '10px' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                            <p>{product.name}</p>
                        </div>
                    ))
                ) : (
                    <p>Aucun produit disponible</p>
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
