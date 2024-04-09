import React from 'react';
import instance from '../misc/Singleton';

const Especes = () => {
    
    document.addEventListener("click", function (event) {
        if(event.target.id === "buttonPayer"){
            let inputEspeces = document.getElementById("inputEspeces").value;
            instance.setPrixAffiche(instance.getPrixAffiche() - inputEspeces);
            document.getElementById("prixTotal").innerHTML = instance.getPrixAffiche();
            document.getElementById("inputEspeces").value = "";
            if(instance.getPrixAffiche() === 0 && instance.getPrixTotal() > 0){
                spawnValidation();
            }
        }
        else if(event.target.id === "buttonValider"){
            document.getElementById("prixTotal").innerHTML = instance.getPrixAffiche();
            document.getElementById("ProduitsEspeces").innerHTML = "";
            addTransaction();

        }
    });

    const spawnValidation = () => {
        if(instance.getPrixAffiche() === 0){
            document.getElementById("ProduitsEspeces").innerHTML += "<button id='buttonValider'>Valider</button>";
        }
    }

    const addTransaction = async () => {
        console.log(instance.getProduits());
        console.log(instance.getPrixTotal());
        // Creer transactionJouraliere avec date_validation (NULL de base) et prix_total
        // Creer ticket avec prix_total, moyen_paiement, date et id_transaction
        // Creer ticket_produit avec id_ticket et id_produit et quantite
        // Mettre a jour stock_produit avec quantite

        const transaction = {
            montant_total: instance.getPrixTotal(),
            moyen_paiement: "especes",
            produits: instance.getProduits()
        }
        const data = {transaction:transaction}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        await fetch('/transaction/add', options)

        instance.setPrixTotal(0);
        instance.setProduits([]);
        document.getElementById("prixTotal").innerHTML = instance.getPrixAffiche();
        document.getElementById("ProduitsEspeces").innerHTML = "";
    
    

    const updateStocks = async () => {
    }
    }
    

    return (
        <div className="composantGrand">
            <div className="esp">
                <div className="Divflex">
                    <div id="topComposant">
                        <h2 className="component_title2"> 💸Espèces</h2>
                    </div>
                </div>
                <div className="separator"></div>

                <div id="PayerEspeces">
                    <h1>Paiement</h1>
                    <div id="Produits" className="DivBlock">
                        <p id="prixespece">Prix total : <span id="prixTotal"> {instance.getPrixAffiche()} </span> €</p>
                        <div id="ProduitsEspeces">
                            <input type="text" id="inputEspeces" placeholder="Montant en €" pattern="[0-9]*" />
                            <button id="buttonPayer">Ajouter</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Especes;
