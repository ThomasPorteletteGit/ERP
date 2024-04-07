import React, {useState}from "react";

//faire logique bouton supprimer
const ListeClient = ({liste_cartes_energies}) => {

    const liste = () => {
        return liste_cartes_energies.map((element) => (
            <div key={element.id} className="client">
                <div className="infoClient">
                    <h4>{element.nom}{element.prenom}{element.adresse}</h4>
                </div>
                <button id="buttonCarteEM Energie">Supprimer</button>
            </div>
        ));
    };

    return (
        <section id='carte'>
            <div className="composantGrandCarteEM">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">Liste des clients</h2>
                    <hr></hr>
                </div>
                <button id="buttonCarteEM" className="buttonCarte Energie">Ajouter une carte</button>
                <button id="buttonCarteEM" className="buttonCarte Energie">Avantage carte énergie</button>
                <div className="energie">
                    {liste()}
                </div>
            </div>
        </section> 
    );

};

export default ListeClient;