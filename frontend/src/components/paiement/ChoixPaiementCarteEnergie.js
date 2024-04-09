import React, { useEffect } from 'react';
import instance from '../misc/Singleton';
const ChoixPaiementCarteEnergie = () => {

    const payerCarteEnergie = async () => {

        const transaction = {
            montant_total: instance.getPrixTotal(),
            moyen_paiement: "carteEnergie",
            produits: instance.getProduits()
        }

        const data = {
            transaction: transaction
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        await fetch("/transaction/add", options).then(response => response.json()).then(data => {
            window.location.reload();
        });
    };

    document.addEventListener("click", (e) => {
        if (e.target.id === "codeCarteEnergieB") {
            console.log("Valider");
            payerCarteEnergie();
        }
    });

    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 🔋Carte Energie</h2>
                    </div>
                </div>
                <div className='separator'></div>
                <div id="PayerCB">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <p id="prixCB">Prix total : <span id="prixTotal">{instance.getPrixTotal()}</span> €</p>
                        <div id="ProduitsCB">
                            <p id="waitingCB">En attente du Paiement</p>
                            <input type="text" id="codeCarteEnergie" placeholder="id carte énergie"></input>
                            <button id="codeCarteEnergieB" className='button_style'>Valider</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoixPaiementCarteEnergie;
