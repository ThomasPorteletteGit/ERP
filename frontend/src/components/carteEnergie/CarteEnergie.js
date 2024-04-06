import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClient from "./ListeClient";
import AjouterCarte from "./AjouterCarte";
import AvantageCarte from "./AvantageCarte";

const CarteEnergie = () => {
    return (
        <section id="carte">
            <div className="composantGrandCarteEM">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">Carte Energie</h2>
                    <hr></hr>
                </div>
                <button id="buttonCarteEM" className="buttonCarte">Voir liste client</button>
                <button id="buttonCarteEM" className="buttonCarte">Ajouter une carte</button>
                <button id="buttonCarteEM" className="buttonCarte">Avantage carte énergie</button>
            </div>
        </section>
    );
};

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonCarte")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Voir liste des clients":
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
    let saveDiv = divGeneral.innerHTML;
    console.log("Afficher les clients");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClient />);
    divGeneral.style.display = "block";
}

function ajouterCarte() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("Afficher les clients");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarte />);
    divGeneral.style.display = "block";
}

function voirAvantage() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("Afficher les clients");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AvantageCarte />);
    divGeneral.style.display = "block";
}
export default CarteEnergie;
