import React from "react";
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "../SmallIcons";
import CarteEnergie from "./CarteEnergie";

const AvantageCarte = ({liste_cartes_energies}) => {

    
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("buttonCarte") && event.target.classList.contains("Energie")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Modifier":
                    break;
                case "Retour":
                    returnHome();
                default:
                    break;
            }
            event.preventDefault();
        }
    });
        
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
                    <button id="buttonCarteEM" className="buttonCarte Energie">Modifier</button>
                </div>
        );
    };

    return (
        <section id='carte'>
            <div className="composantGrand">
                <div className="composantGrandCarteEM">
                    <div className="Top_Component_Grand">
                        <button id="buttonReturn" className="buttonCarte">Retour</button>
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


function returnHome() {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    console.log("return Home");

    const smallIcons = ReactDOMServer.renderToString(<SmallIcons />);
    const carteEnergie = ReactDOMServer.renderToString(<CarteEnergie />);
    divGeneral.innerHTML = smallIcons + carteEnergie;
    divGeneral.style.display = "block";
}

export default AvantageCarte;
