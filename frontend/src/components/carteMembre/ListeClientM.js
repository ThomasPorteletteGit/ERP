import React, { useState } from "react";

//faire logique bouton supprimer
const ListeClientM = () => {
    const [clients, setClients] = useState([
        { id: 1, nom: "Truc", prenom: " Jean", adresse: " 1 rue de la paix" },
        { id: 2, nom: "Bidule", prenom: " Jean", adresse: " 2 rue de la paix" },
        { id: 3, nom: "Machin", prenom: " Jean", adresse: " 3 rue de la paix" },
        { id: 4, nom: "Chose", prenom: " Jean", adresse: " 4 rue de la paix" },
        { id: 5, nom: "Truc", prenom: " Gertrude", adresse: " 5 rue de la paix" },
        { id: 6, nom: "Bidule", prenom: " Gertrude", adresse: " 6 rue de la paix" },
        { id: 7, nom: "Machin", prenom: " Gertrude", adresse: " 7 rue de la paix" },
    ]);

    const liste = () => {
        return clients.map((element) => (
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
                    <button id="buttonCarteEM" className="buttonCarte">Ajouter une carte</button>
                    <button id="buttonCarteEM" className="buttonCarte">Avantage carte énergie</button>
                    <div className="energie">
                        {liste()}
                    </div>
                </div>
            </div>
        </section>
    );

};

export default ListeClientM;