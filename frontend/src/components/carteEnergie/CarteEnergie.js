import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClient from "./ListeClient";
import AjouterCarte from "./AjouterCarte";
import AvantageCarte from "./AvantageCarte";
import SmallIcons from "../SmallIcons";

const CarteEnergie = ({liste_cartes_energies}) => {

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte") && event.target.classList.contains("Energie")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Voir liste clients":
                    afficherClients(liste_cartes_energies);
                    break;
                case "Ajouter une carte":
                    ajouterCarte(liste_cartes_energies);
                    break;
                case "Avantage carte énergie":
                    voirAvantage(liste_cartes_energies);
                    break;
                default:
                    break;
            }
            event.preventDefault();
        }
    });
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
                        <button id="buttonCarteEM" className="buttonCarte Energie">Voir liste clients</button>
                        <button id="buttonCarteEM" className="buttonCarte Energie">Ajouter une carte</button>
                        <button id="buttonCarteEM" className="buttonCarte Energie">Avantage carte énergie</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

function afficherClients(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<ListeClient liste_cartes_energies={liste_cartes_energies}/>);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

function ajouterCarte(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<AjouterCarte liste_cartes_energies={liste_cartes_energies}/>);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

function voirAvantage(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<AvantageCarte liste_cartes_energies={liste_cartes_energies} />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

export default CarteEnergie;
