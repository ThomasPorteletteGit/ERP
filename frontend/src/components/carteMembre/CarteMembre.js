import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClientM from "./ListeClientM";
import AjouterCarteM from "./AjouterCarteM";
import AvantageCarteM from "./AvantageCarteM";
import SmallIcons from "../SmallIcons";

const CarteMembre = () => {
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
                        <button id="buttonCarteEM" className="buttonAction">Voir liste des clients</button>
                        <button id="buttonCarteEM" className="buttonAction">Ajouter une carte</button>
                        <button id="buttonCarteEM" className="buttonAction">Avantage carte membre</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("buttonAction")) {
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
            case "Avantage carte membre":
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
    const carteMembre = ReactDOMServer.renderToString(<ListeClientM />);
    divGeneral.innerHTML = smallIcons + carteMembre;
    divGeneral.style.display = "block";
}

function ajouterCarte() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteMembre = ReactDOMServer.renderToString(<AjouterCarteM />);
    divGeneral.innerHTML = smallIcons + carteMembre;
    divGeneral.style.display = "block";
}

function voirAvantage() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteMembre = ReactDOMServer.renderToString(<AvantageCarteM />);
    divGeneral.innerHTML = smallIcons + carteMembre;
    divGeneral.style.display = "block";
}
export default CarteMembre;
