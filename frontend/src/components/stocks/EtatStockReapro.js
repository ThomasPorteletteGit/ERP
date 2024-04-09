import React, { useState } from 'react';

const EtatStockReapro = () => {
    const [addedItems, setAddedItems] = useState([]);

    const handleAddItem = (action, productName) => {
        let updatedItems = [...addedItems];
        const existingItemIndex = updatedItems.findIndex(item => item.produit === productName);
        if (existingItemIndex !== -1) {
            if (action === '+') {
                updatedItems[existingItemIndex].quantite++;
            } else if (action === '-') {
                if (updatedItems[existingItemIndex].quantite > 1) {
                    updatedItems[existingItemIndex].quantite--;
                } else {
                    updatedItems.splice(existingItemIndex, 1);
                }
            } else if (action === 'x') {
                updatedItems.splice(existingItemIndex, 1);
            }
        } else {
            if (action === '+') {
                updatedItems.push({ produit: productName, quantite: 1, prix: '$10.00' });
            }
        }
        setAddedItems(updatedItems);
    };

    const createBonReapprovisionnement = () => {
        // Mettez ici la logique pour créer le bon de réapprovisionnement
        console.log("Bon de réapprovisionnement créé !");
    };

    const tableMaxHeight = 5 * 50; // Hauteur de chaque ligne (50px) multipliée par le nombre de lignes de base

    return (
        <div className="etat-stock">
            <div>
                <h2>Réapprovisionnement boutique</h2>
                <div className="table-scroll" style={{ maxHeight: tableMaxHeight }}>
                    <table>
                        <thead>
                            <tr>
                                <th className="produit">Produit</th>
                                <th className="quantite">Quantité</th>
                                <th className="prix">Prix</th>
                                <th className="action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 2 }).map((_, index) => (
                                <tr key={index}>
                                    <td className="produit"></td>
                                    <td className="quantite"></td>
                                    <td className="prix"></td>
                                    <td className="action"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h2>Panier</h2>
                <div className="table-scroll" style={{ maxHeight: tableMaxHeight }}>
                    <table>
                        <thead>
                            <tr>
                                <th className="produit">Produit</th>
                                <th className="quantite">Quantité</th>
                                <th className="prix">Prix</th>
                                <th className="action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 2 }).map((_, index) => (
                                <tr key={index}>
                                    <td className="produit"></td>
                                    <td className="quantite"></td>
                                    <td className="prix"></td>
                                    <td className="action"></td>
                                </tr>
                            ))}
                            {addedItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="produit">{item.produit}</td>
                                    <td className="quantite">{item.quantite}</td>
                                    <td className="prix">{item.prix}</td>
                                    <td className="action">
                                        <button onClick={() => handleAddItem('-', item.produit)}>-</button>
                                        <button onClick={() => handleAddItem('x', item.produit)}>x</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <button className='buttonRéapprovisionnement' onClick={createBonReapprovisionnement}>Créer un bon de réapprovisionnement</button>
            </div>
        </div>
    );
};

export default EtatStockReapro;
