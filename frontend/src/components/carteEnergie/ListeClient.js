import React, {useState}from "react";
import ReactDOMServer from 'react-dom/server'
import CarteEnergie from "./CarteEnergie";
import SmallIcons from "../SmallIcons";


//faire logique bouton supprimer
const ListeClient = ({liste_cartes_energies}) => {

    const liste = ({liste_cartes_energies}) => {
        if(liste_cartes_energies.length === 0){
            return <h2>Aucun client</h2>
        }
        return liste_cartes_energies.map((element) => (
            <div id={element.id_client+"carteEnergie"} className="client">
                <div className="infoClient">
                    <h4>{element.nom} {element.prenom} {element.adresse_mail}</h4>
                </div>
                <button id="buttonCarteEM Energie" className="buttonCarte">Supprimer</button>
            </div>
        ));
    };

    const supprimerClient = async (button) => {
        const id_carte = button.parentElement.id.split('carteEnergie')[0];
        const data = {id_carte: id_carte};
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        await fetch("/cartesEnergie/delete", options);
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Supprimer":
                    supprimerClient(event.target);
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
                        {liste({liste_cartes_energies})}
                    </div>
                </div>
            </div>
        </section> 
    );

};


function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
      const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<CarteEnergie />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}


export default ListeClient;