import React from "react";

const EtatCuvesReapro = () => {
    return(
        <div id="cuvesPrix">
            <h3>Demande de réaprovisionnement</h3>
            <div className="Divflex">
                <div id="divPrix">
                    <div className="Divflex">
                        <input type="checkbox" id="ReaproEsp-97" name="ReaproEsp-97"/>
                        <label for="ReaproEsp-97"> ESP-97</label>
                    </div>
                    <div className="Divflex">
                        <input type="checkbox" id="ReaproGazole" name="ReaproGazole"/>
                        <label for="ReaproGazole"> GAZOLE</label>
                    </div>
                    <div className="Divflex">
                        <input type="checkbox" id="ReaproDiesel" name="ReaproDiesel"/>
                        <label for="ReaproDiesel"> DIESEL</label>
                    </div>
                    <div className="Divflex">
                        <input type="checkbox" id="ReaproGPL" name="ReaproGPL"/>
                        <label for="ReaproGPL"> GPL</label>
                    </div>
                </div>
                <div className="DivBlock">
                    <button id="btnValiderReapro">Valider</button>
                    <button id="btnAnnulerReapro">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesReapro;