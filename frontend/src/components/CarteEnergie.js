import React from "react";

const CarteEnergie = () => {

    //recup dans bd
    const clients = [
        { nom: "Jean Truc" },
        { nom: "Jean Bidule" },
        { nom: "Jean Machin" },
        { nom: "Jean Chose" },
        { nom: "Gertrude Truc" },
        { nom: "Gertrude Bidule" },
        { nom: "Gertrude Machin" }
    ];

    const afficherClients = () => {
        return clients.map(element => (
            <div key={element.nom} className="client">
                <div className="infoClient">
                    <h2>{element.nom}</h2>
                </div>
                <div className="boutons">
                    <button>Voir plus</button>
                    <button>Supprimer</button>
                </div>
            </div>
        ));
    }

    return (
        <section id="carte">
            <div className="composantGrand">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">Carte Energie</h2>
                    <hr></hr>
                </div>
                <button className="buttonCarte">Ajouter une carte</button>
                <button className="buttonCarte">Voir la liste des utilisateurs</button>
                <button className="buttonCarte">Avantage carte membre</button>


                <div className="listClient">
                    <div>
                        <h2>{afficherClients()}</h2>
                    </div>

                </div>
            </div>
        </section>

    );

}
export default CarteEnergie