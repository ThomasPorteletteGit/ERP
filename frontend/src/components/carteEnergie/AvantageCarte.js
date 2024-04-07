import React from "react";
import ReactDOMServer from 'react-dom/server'
import ListeClient from "./ListeClient";
import AjouterCarte from "./AjouterCarte";


const AvantageCarte = ({liste_cartes_energies}) => {

    
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
                case "Modifier":
                    break;
                default:
                    break;
            }
            event.preventDefault();
        }
    });
        
    const avantagesCarte = () => {
        return (
            <div className="composantGrand">

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
                    <button id="buttonCarteEM" className="buttonCarte Energie">Modifier</button>
                </div>
            </div>
        );
    };

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <h2 className="component_title">Avantage</h2>
                        <hr></hr>
                    </div>
                    <button id="buttonCarteEM" className="buttonCarte Energie">Voir liste clients</button>
                    <button id="buttonCarteEM" className="buttonCarte Energie">Ajouter une carte</button>
                    <div className="energie">
                        {avantagesCarte()}
                    </div>
                </div>
            </div>
        </section>
    );

};


function afficherClients(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("composantGrand")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<ListeClient liste_cartes_energies={liste_cartes_energies}/>);
    divGeneral.style.display = "block";
}

function ajouterCarte(liste_cartes_energies) {
    const divGeneral = document.getElementsByClassName("composantGrand")[0];
    let saveDiv = divGeneral.innerHTML;

    divGeneral.innerHTML = ReactDOMServer.renderToString(<AjouterCarte liste_cartes_energies={liste_cartes_energies}/>);
    divGeneral.style.display = "block";
}

export default AvantageCarte;