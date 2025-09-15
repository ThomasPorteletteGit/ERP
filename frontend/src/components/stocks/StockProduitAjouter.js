import React, { useState } from 'react';

const StockProduitAjouter = ({stocks}) => {

    document.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    document.addEventListener("click", function (event) {
        if(event.target.id === "validerCreationProduit") {
            handleAddProduct();
        }
    });
    const handleAddProduct = async () => {
        const nom = document.querySelector("input[name='nameProduit']").value;
        const description = document.querySelector("textarea[name='descriptionProduit']").value;
        const quantite = document.querySelector("input[name='quantityProduit']").value;
        const prix = document.querySelector("input[name='priceProduit']").value;

        const newProduct = {
            nom: nom,
            prix: prix,
            quantite_stock: quantite,
            description: description
        }

        const options =  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }
        await fetch("/stockProduits/add", options).then(response => response.json()).then(data => {
            window.location.reload();
        });
    };

    return (
        <div className="StockProduitAjouter">
            <h2>Ajouter un nouveau produit</h2>
            <button className="annulerProduitButton">Retour</button>
            <form>
                <div>
                    <label htmlFor="nameProduit">Nom :</label>
                    <input
                        type="text"
                        id="nameProduit"
                        name="nameProduit"
                    />
                </div>
                <div>
                    <label htmlFor="descriptionProduit">Description :</label>
                    <textarea
                        id="descriptionProduit"
                        name="descriptionProduit"
                    />
                </div>
                <div>
                    <label htmlFor="quantityProduit">Quantité :</label>
                    <input
                        type="number"
                        id="quantityProduit"
                        name="quantityProduit"
                    />
                </div>
                <div>
                    <label htmlFor="priceProduit">Prix :</label>
                    <input
                        type="number"
                        step={0.1}
                        id="priceProduit"
                        name="priceProduit"
                    />
                </div>
                <div className="submit-container">
                    <button type="submit" id='validerCreationProduit'>Ajouter</button>
                </div>
            </form>
        </div>
    );    
};

export default StockProduitAjouter;
