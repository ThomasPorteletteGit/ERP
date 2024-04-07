import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClientM from "./ListeClientM";
import AjouterCarteM from "./AjouterCarteM";
import AvantageCarteM from "./AvantageCarteM";

const CarteMembre = ({liste_cartes_membres}) => {

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte") && event.target.classList.contains("Membre")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Voir liste clients":
                    afficherClients(liste_cartes_membres);
                    break;
                case "Ajouter une carte":
                    ajouterCarte(liste_cartes_membres);
                    break;
                case "Avantage carte membre":
                    voirAvantage(liste_cartes_membres);
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
                            <h2 className="component_title2">Carte membre</h2>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="carte-btn-container">
                        <button id="buttonCarteEM" className="buttonCarte Membre">Voir liste clients</button>
                        <button id="buttonCarteEM" className="buttonCarte Membre">Ajouter une carte</button>
                        <button id="buttonCarteEM" className="buttonCarte Membre">Avantage carte membre</button>
                    </div>
                </div>
            </div>
        </section>
    );
};



function afficherClients(liste_cartes_membres) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClientM liste_cartes_membres={liste_cartes_membres}/>);
    divGeneral.style.display = "block";
}

function ajouterCarte(liste_cartes_membres) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarteM liste_cartes_membres={liste_cartes_membres}/>);
    divGeneral.style.display = "block";
}

function voirAvantage(liste_cartes_membres) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AvantageCarteM liste_cartes_membres={liste_cartes_membres}/>);
    divGeneral.style.display = "block";
}
export default CarteMembre;
