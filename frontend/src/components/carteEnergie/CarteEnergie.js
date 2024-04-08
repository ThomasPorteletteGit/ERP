import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClient from "./ListeClient";
import AjouterCarte from "./AjouterCarte";
import AvantageCarte from "./AvantageCarte";
import SmallIcons from "../SmallIcons";

const CarteEnergie = () => {
    return (
        <section id="carte">
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Divflex">
                        <div id="topComposant">
                            <h2 className="component_title2">Carte énergie</h2>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="carte-btn-container">
                        <button id="buttonCarteEM" className="buttonCarte">Voir liste client</button>
                        <button id="buttonCarteEM" className="buttonCarte">Ajouter une carte</button>
                        <button id="buttonCarteEM" className="buttonCarte">Avantage carte énergie</button>
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
            case "Voir liste client":
                console.log("Bouton liste client -> liste client cliqué");
                afficherClients();
                break;
            case "Ajouter une carte":
                console.log("Bouton ajouter carte cliqué");
                ajouterCarte();
                break;
            case "Avantage carte énergie":
                console.log("Bouton avantage cliqué");
                voirAvantage();
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }
});

function afficherClients() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<ListeClient />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

function ajouterCarte() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<AjouterCarte />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

function voirAvantage() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<AvantageCarte />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}
export default CarteEnergie;
