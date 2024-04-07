import React from "react";
import Cuve from "./Cuve";
import ReactDOMServer from 'react-dom/server'
import EtatCuvesPrix from "./EtatCuvesPrix";
import EtatCuvesReapro from "./EtatCuvesReapro";

const EtatCuvesGrand = () => {
    let energies = [];
    
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btnCuvesGrandClick")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Modifier le prix":
                    document.getElementById("cuvesGrand").innerHTML = ReactDOMServer.renderToString(<EtatCuvesPrix />);
                    break;
                case "Demande de réapprovisionnement":
                    document.getElementById("cuvesGrand").innerHTML = ReactDOMServer.renderToString(<EtatCuvesReapro />);
                    break;
                default:
                    console.log("Bouton inconnu cliqué" + buttonText);
                    break;
            }
            event.preventDefault();
        }
    });
    return (
        <div className="composantGrand" id="cuvesGrands">
            {/* <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title">🛢️ Etat des cuves</h2>
                </div>
                <div id="topComposant2">
                    <h4>Dernière mise à jour : <span id="lastUpdate">X</span> min</h4>
                    <button id="buttonUpdate">Actualiser ⟳</button>
                </div>
            </div> */}
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title2">🛢️ Etat des cuves</h2>
                </div>
                <div id="topComposant2">
                    <h4>Dernière mise à jour : <span id="lastUpdate">X</span> min</h4>
                    <button id="buttonUpdate">Actualiser ⟳</button>
                </div>
            </div>
            <div className="separator"></div>
            <div id="cuvesGrand">
                <Cuve carburant="SP-95" niveau={80} />
                <Cuve carburant="SP-98" niveau={60} />
                <Cuve carburant="Gazole" niveau={75} />
                <Cuve carburant="GPL" niveau={40} />
                <Cuve carburant="Elec" niveau={100} />
                <Cuve carburant="E85" niveau={20} />
                <div id="cuvesButtons" className="DivBlock">
                    <button className="btnCuvesGrandClick button_style" id="thefirst">Modifier le prix</button>
                    <button className="btnCuvesGrandClick button_style">Demande de réapprovisionnement</button>
                </div>
            </div>
        </div>
    );
};

export default EtatCuvesGrand;