import React from "react";
import ReactDOMServer from 'react-dom/server'
import EtatStockAnnuleReapro from "./EtatStockAnnuleReapro";
import EtatStockReapro from "./EtatStockReapro";
import StockProduit from "./StockProduit";

const EtatStockGrand = () => {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btnStockGrandClick")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                case "Voir le stock":
                    document.getElementById("stockGrand").innerHTML = ReactDOMServer.renderToString(<StockProduit/>);
                    break;
                case "Annuler un réapprovisionnement":
                    document.getElementById("stockGrand").innerHTML = ReactDOMServer.renderToString(<EtatStockAnnuleReapro/>);
                    break;
                case "Demande de réapprovisionnement":
                    document.getElementById("stockGrand").innerHTML = ReactDOMServer.renderToString(<EtatStockReapro/>);
                    break;
                default:
                    console.log("Bouton inconnu cliqué: " + buttonText);
                    break;
            }
        }
    });

    return (
        <div className="composantGrand" id="stockGrands">
            <div className="Divflex">
                <div id="topComposant">
                    <h2 className="component_title">📦 Stocks</h2>
                </div>
            </div>
            <hr />
            <div id="stockGrand">
                <div className="Divflex">
                    <button className="btnStockGrandClick" >Voir le stock</button>
                </div>
                <div className="Divflex">
                    <button className="btnStockGrandClick" >Demande de réapprovisionnement</button>
                    <button className="btnStockGrandClick" >Annuler un réapprovisionnement</button>
                </div>
            </div>
        </div>
    );
};

export default EtatStockGrand;
