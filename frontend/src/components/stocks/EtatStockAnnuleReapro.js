import React, { useState } from 'react';

const EtatStockAnnuleReapro = ({stocks}) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Produit A", quantity: 10, price: "$10.00", date: "2024-04-07" },
        { id: 2, name: "Produit B", quantity: 5, price: "$15.00", date: "2024-04-08" },
        { id: 1, name: "Produit A", quantity: 10, price: "$10.00", date: "2024-04-07" },
        { id: 2, name: "Produit B", quantity: 5, price: "$15.00", date: "2024-04-08" },
        { id: 1, name: "Produit A", quantity: 10, price: "$10.00", date: "2024-04-07" },
        { id: 2, name: "Produit B", quantity: 5, price: "$15.00", date: "2024-04-08" },
        { id: 3, name: "Produit C", quantity: 8, price: "$8.00", date: "2024-04-09" }
    ]);

    const handleCancel = (productId) => {
        // Filtrer la liste des produits pour exclure le produit annulé
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <div className='container-AnnulerRéapro'>
            <div className="AnnulerRéapro" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {products.map(product => (
                    <div key={product.id} className="product-AnnulerRéapro">
                        <div className="product-info">
                            <p>Bon n°: {product.id}</p>
                            <p>Quantité: {product.quantity}</p>
                            <p>Prix:{product.price}</p>
                        </div>
                        <div className="cancel-button-container">
                            <button className="cancel-button" onClick={() => handleCancel(product.id)}>Annuler</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EtatStockAnnuleReapro;
