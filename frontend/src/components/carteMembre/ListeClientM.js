import React, { useState } from "react";

//faire logique bouton supprimer
const ListeClientM = ({liste_cartes_membres}) => {
    
    const liste = ({liste_cartes_membres}) => {
        if(liste_cartes_membres.length === 0){
            return <h2>Aucun client</h2>
        }
        return liste_cartes_membres.map((element) => (
            <div className="composantGrand">
                <div key={element.id} className="client">
                    <div className="infoClient">
                        <h4>{element.nom}{element.prenom}{element.adresse}</h4>
                    </div>
                    <button id="buttonCarteEM">Supprimer</button>
                </div>
            </div>
        ));
    };

    return (
        <section id='carte'>
            <div className="composantGrand">

                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <h2 className="component_title">Liste des clients</h2>
                        <hr></hr>
                    </div>
                    <button id="buttonCarteEM" className="buttonCarte Membre">Ajouter une carte</button>
                    <button id="buttonCarteEM" className="buttonCarte Membre">Avantage carte énergie</button>
                    <div className="energie">
                        {liste({liste_cartes_membres})}
                    </div>
                </div>
            </div>
        </section>
    );

};

export default ListeClientM;