import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClientM from "./ListeClientM";
import AjouterCarteM from "./AjouterCarteM";


const AvantageCarteM = () => {
    const avantagesCarte = () => {
        return ( 
            <div className="avantages">
                <div className="infoAvantages">
                    <h3>Points de fidélité : </h3>
                </div>
                <div className="infoPoint">
                    <h4>Comment recuperer des points de fidélité ?</h4>
                    <hr></hr>
                    <p className="avantage">BLA bla bla</p>
                </div>
                <div className="infoPoint">
                    <h4>Comment utiliser les points de fidélité ?</h4>
                    <hr></hr>
                    <p className="avantage">BLA bla bla</p>
                </div>
                <button id="buttonCarteEM" className="buttonCarte">Modifier</button>
            </div>
        );
    };

    return (
        <section id='carte'>
            <div className="composantGrandCarteEM">
                <div className="Top_Component_Grand">
                    <h2 className="component_title">Avantage</h2>
                    <hr></hr>
                </div>
                <button id="buttonCarteEM" className="buttonCarte">Voir liste des clients</button>
                <button id="buttonCarteEM" className="buttonCarte">Ajouter une carte</button>
                <div className="energie">
                    {avantagesCarte()}
                </div>
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
            case "Modifier":
                console.log("Bouton modifer cliqué");
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

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClientM />);
    divGeneral.style.display = "block";
}

function ajouterCarte() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    let saveDiv = divGeneral.innerHTML;
    console.log("Afficher les clients");

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarteM />);
    divGeneral.style.display = "block";
}

export default AvantageCarteM;