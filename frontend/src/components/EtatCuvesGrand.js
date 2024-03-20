import React from "react";
import Cuve from "./Cuve";

const EtatCuvesGrand = () => {
    return (
        <div className="composantGrand">
            <div className="Divflex">
            <div id="topComposant">
                <h2 className="component_title">🛢️ Etat des cuves</h2>
            </div>
            <div id="topComposant2">
                <h4>Dernière mise à jour : <span id="lastUpdate">X</span> min</h4>
                <button id="buttonUpdate">Actualiser ⟳</button>
            </div>
            </div>
            <hr/>
            <div id="cuvesGrand">
                <Cuve carburant={"ESP-97"} niveau={69}/>
                <Cuve carburant={"GAZOLE"} niveau={69}/>
                <Cuve carburant={"DIESEL"} niveau={69}/>
                <Cuve carburant={"GPL"} niveau={69}/>
                <div id="cuvesButtons" className="DivBlock">
                    <button>Modifier le prix</button>
                    <button>Demande de reaprovisionnement</button>
                </div>
            </div>
        </div>
    );
};

export default EtatCuvesGrand;