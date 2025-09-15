import React, { useState } from 'react';

const EtatStockReapro = ({stocks}) => {
    const [addedItems, setAddedItems] = useState([]);

   
    const createBonReapprovisionnement = async () => {

        const data = {
            nom: document.getElementById("ajoutproduitstock").value,
            quantite: document.getElementById("ajoutqtestock").value
        }
      
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        await fetch("/stockProduits/reapprovisionner", options).then(response => response.json()).then(data => {
            window.location.reload();
        });
            
      
    };

    document.addEventListener("click", (e) => {
        if (e.target.className === "buttonRéapprovisionnement") {
            console.log("Valider");
            createBonReapprovisionnement();
        }
    });

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
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 2 }).map((_, index) => (
                                <tr id={index}>
                                    <td className="produit"><input type='text' id="ajoutproduitstock"/></td>
                                    <td className="quantite"><input type='text' id="ajoutqtestock"/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <button className='buttonRéapprovisionnement'>Créer un bon de réapprovisionnement</button>
            </div>
        </div>
    );
};

export default EtatStockReapro;
