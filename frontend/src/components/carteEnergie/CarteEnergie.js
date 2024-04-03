import React, { useState } from "react";

const CarteEnergie = () => {
    const clients = [
        { id: 1, nom: "Jean Truc" },
        { id: 2, nom: "Jean Bidule" },
        { id: 3, nom: "Jean Machin" },
        { id: 4, nom: "Jean Chose" },
        { id: 5, nom: "Gertrude Truc" },
        { id: 6, nom: "Gertrude Bidule" },
        { id: 7, nom: "Gertrude Machin" }
    ];

    const afficherClients = () => {
        return clients.map((element) => (
            <div key={element.id} className="client">
                <div className="infoClient">
                    <h4>{element.nom}</h4>
                </div>
                <div className="boutons">
                    <button className="voirPlus">Voir plus</button>
                    <button id="supprimerClientEnergie" className="Supprimer">Supprimer</button>
                </div>
            </div>
        ));
    };
    
    //A REVOIR MARCHE PAS VRAIEMENT
    document.addEventListener('click', function(event) {
        clients.map(element => {
            const buttonSupClientEnergie = document.getElementById('supprimerClientEnergie');
            buttonSupClientEnergie.addEventListener('click', function(){
                console.log("Suppression du client " + element.id);
                suppressionClient(element.id);

            });
            
            event.preventDefault();
            event.stopPropagation();
        });
        event.preventDefault();
    });





    const suppressionClient = (clientId) => {
        
        if (window.confirm('Voulez-vous vraiment supprimer ce client ?')) {
            //ajouter la logique
            console.log('Le client avec l\'identifiant ${clientId} a été supprimé.');
        }
    };

    return (
        <section id="carte">
            <div className="composantGrand">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">Carte Energie</h2>
                    <hr></hr>
                </div>
                <button className="buttonCarte">Ajouter une carte</button>
                <button className="buttonCarte">Avantage carte membre</button>

                <div className="listClient">
                    {afficherClients()}
                </div>


            </div>
        </section>
    );
};

export default CarteEnergie;
