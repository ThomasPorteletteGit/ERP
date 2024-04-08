import React from "react";

const EtatCuvesReapro = () => {
    return (
        <div id="cuvesPrix">
            <h3>Demande de réaprovisionnement</h3>
            <div className="Etatcuvediv">
                <div id="divPrixEtat">
                    <div className="defautreaprodiv">
                        <input type="checkbox" id="ReaproEsp-97" name="ReaproEsp-97" />
                        <label for="ReaproEsp-97"> ESP-97</label>
                    </div>
                    <div className="defautreaprodiv">
                        <input type="checkbox" id="ReaproGazole" name="ReaproGazole" />
                        <label for="ReaproGazole"> GAZOLE</label>
                    </div>
                    <div className="defautreaprodiv">
                        <input type="checkbox" id="ReaproDiesel" name="ReaproDiesel" />
                        <label for="ReaproDiesel"> DIESEL</label>
                    </div>
                    <div className="defautreaprodiv">
                        <input type="checkbox" id="ReaproGPL" name="ReaproGPL" />
                        <label for="ReaproGPL"> GPL</label>
                    </div>
                    <div className="defautreaprodiv">
                        <input type="checkbox" id="ReaproE85" name="ReaproE85" />
                        <label for="ReaproE85"> E85</label>
                    </div>

                </div>
                <div className="btnEtat">
                    <button id="btnValiderReapro">Valider</button>
                    <button id="btnAnnulerReapro">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesReapro;