import React from "react";

const EtatCuvesPrix = () => {
    return (
        <div id="cuvesPrix">
            <h3>Modification du prix</h3>
            <div className="Etatcuvediv">
                <div id="divPrixEtat">
                    <div className="defautcuvediv">
                        <label htmlFor="prixESP-97"> ● Prix de l'ESP-97 : </label>
                        <input type="number" id="prixESP-97" name="prixESP-97" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="defautcuvediv">
                        <label htmlFor="prixGAZOLE"> ● Prix du GAZOLE : </label>
                        <input type="number" id="prixGAZOLE" name="prixGAZOLE" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="defautcuvediv">
                        <label htmlFor="prixDIESEL"> ● Prix du DIESEL : </label>
                        <input type="number" id="prixDIESEL" name="prixDIESEL" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="defautcuvediv">
                        <label htmlFor="prixGPL"> ● Prix du GPL : </label>
                        <input type="number" id="prixGPL" name="prixGPL" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="defautcuvediv">
                        <label htmlFor="prixElec"> ● Prix de l'électique : </label>
                        <input type="number" id="prixElec" name="prixElec" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="defautcuvediv">
                        <label htmlFor="prixE85"> ● Prix de l'E85 : </label>
                        <input type="number" id="prixE85" name="prixE85" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                </div>
                <div className="btnEtat">
                    <button id="btnValiderPrix" className="button_style">Valider</button>
                    <button id="btnAnnulerPrix" className="button_style">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesPrix;