import React, {useState}from "react";
import ReactDOMServer from 'react-dom/server'
import CarteEnergie from "./CarteEnergie";
import SmallIcons from "../SmallIcons";


//faire logique bouton supprimer
const ListeClient = ({liste_cartes_energies}) => {

    const liste = () => {
        return liste_cartes_energies.map((element) => (
            <div key={element.id} className="client">
                <div className="infoClient">
                    <h4>{element.nom}{element.prenom}{element.adresse}</h4>
                </div>
                <button id="buttonCarteEM Energie" className="buttonCarte">Supprimer</button>
            </div>
        ));
    };

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <button id="buttonReturn" className="buttonCarte">Retour</button>
                        <h2 className="component_title">Liste des clients</h2>
                        <hr></hr>
                    </div>
                    
                    <div className="energie">
                        {liste()}
                    </div>
                </div>
            </div>
        </section> 
    );

};

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonCarte")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Supprimer":
                console.log("Bouton supprimer cliqué");
                break;
            case "Retour":
                console.log("Bouton retour cliqué");
                returnHome();
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }
});

function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
      const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<CarteEnergie />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}


export default ListeClient;