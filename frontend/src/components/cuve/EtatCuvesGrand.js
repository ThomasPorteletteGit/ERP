import React, { Component } from "react";
import Cuve from "./Cuve";
import ReactDOMServer from 'react-dom/server'
import EtatCuvesPrix from "./EtatCuvesPrix";
import EtatCuvesReapro from "./EtatCuvesReapro";

const EtatCuvesGrand = () => {
    // document.addEventListener("click", function (event) {
    //     if (event.target.classList.contains("btnCuvesGrandClick")) {
    //         const buttonText = event.target.textContent;
    //         console.log(buttonText);
    //         switch (buttonText) {
    //             case "Modifier le prix":
    //                 document.getElementById("cuvesGrand").innerHTML = ReactDOMServer.renderToString(<EtatCuvesPrix/>);
    //                 break;
    //             case "Demande de réapprovisionnement":
    //                 document.getElementById("cuvesGrand").innerHTML = ReactDOMServer.renderToString(<EtatCuvesReapro/>);
    //                 break;
    //             default:
    //                 console.log("Bouton inconnu cliqué" + buttonText);
    //                 break;
    //         }
    //         event.preventDefault();
    //     }
    // });

    function handleClick() {
        console.log("click");
        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("btnCuvesGrandClick")) {

            const buttonText = event.target.textContent;
            console.log(buttonText);
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
        }
    }); }
    return (
        <div className="composantGrand" id="cuvesGrands">
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title">🛢️ Etat des cuves</h2>
                </div>
                <div id="topComposant2">
                    <h4>Dernière mise à jour : <span id="lastUpdate">X</span> min</h4>
                    <button id="buttonUpdate">Actualiser ⟳</button>
                </div>
            </div>
            <hr />
            <div id="cuvesGrand">
                <Cuve carburant={"ESP-97"} niveau={20} />
                <Cuve carburant={"GAZOLE"} niveau={70} />
                <Cuve carburant={"DIESEL"} niveau={50} />
                <Cuve carburant={"GPL"} niveau={2} />
                <div id="cuvesButtons" className="DivBlock">
                    <button className="btnCuvesGrandClick" id="thefirst" onClick={handleClick}>Modifier le prix</button>
                    <button className="btnCuvesGrandClick">Demande de réapprovisionnement</button>
                </div>
            </div>
        </div>
    );
};

export default EtatCuvesGrand;