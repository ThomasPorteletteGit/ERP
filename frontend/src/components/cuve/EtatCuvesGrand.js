import React, { Component } from "react";
import Cuve from "./Cuve";
import ReactDOMServer from 'react-dom/server'
import EtatCuvesPrix from "./EtatCuvesPrix";
import EtatCuvesReapro from "./EtatCuvesReapro";

const EtatCuvesGrand = (energies) => {
    const energiesObject = energies.energies.energies;
    console.log(energiesObject);
    const energiesAndQuantities = energiesObject.filter(energie => energie.quantite_stock !== undefined);
    const energiesAndPrices = energiesObject.filter(energie => energie.prix !== undefined);
    
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btnCuvesGrandClick")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Modifier le prix":
                    document.getElementById("cuvesGrand").innerHTML = ReactDOMServer.renderToString(<EtatCuvesPrix energies={energiesAndPrices}/>);
                    break;
                case "Demande de réapprovisionnement":
                    document.getElementById("cuvesGrand").innerHTML = ReactDOMServer.renderToString(<EtatCuvesReapro energies={energiesAndQuantities}/>);
                    break;
                default:
                    break;
            }
        }
    }); 
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
                {
                    energiesAndQuantities.map((energie) => {
                        return <Cuve carburant={energie.nom} niveau={energie.quantite_stock*100/1000} />
                    })
                }

                <div id="cuvesButtons" className="DivBlock">
                    <button className="btnCuvesGrandClick" id="thefirst">Modifier le prix</button>
                    <button className="btnCuvesGrandClick">Demande de réapprovisionnement</button>
                </div>
            </div>
        </div>
    );
};

export default EtatCuvesGrand;