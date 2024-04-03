import React from "react";

const EtatCuvesPrix = () => {
    let energies = [];
    fetch("/stockEnergie/names")
    .then(response => response.json())
    .then(data => {
        energies = data;
        console.log(data);
    });
    return (
        <div id="cuvesPrix">
            <h3>Modification du prix</h3>
            <div className="Divflex">
                <div id="divPrix">
                    {/* <div className="Divflex">
                        <label htmlFor="prixESP-97"> ● Prix de l'ESP-97 : </label>
                        <input type="number" id="prixESP-97" name="prixESP-97" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="Divflex">
                        <label htmlFor="prixGAZOLE"> ● Prix du GAZOLE : </label>
                        <input type="number" id="prixGAZOLE" name="prixGAZOLE" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="Divflex">
                        <label htmlFor="prixDIESEL"> ● Prix du DIESEL : </label>
                        <input type="number" id="prixDIESEL" name="prixDIESEL" min="0" max="10" step="0.001" value="1.857" />
                    </div>
                    <div className="Divflex">
                        <label htmlFor="prixGPL"> ● Prix du GPL : </label>
                        <input type="number" id="prixGPL" name="prixGPL" min="0" max="10" step="0.001" value="1.857" />
                    </div> */}
                    {energies.map((energie) => {
                        return (
                            <div className="Divflex" key={energie}>
                                <label htmlFor={"prix" + energie}> ● Prix de {energie} : </label>
                                <input type="number" id={"prix" + energie} name={"prix" + energie} min="0" max="10" step="0.001" value="1.857" />
                            </div>
                        );
                    })}
                </div>
                <div className="DivBlock">
                    <button id="btnValiderPrix">Valider</button>
                    {
                        document.getElementById("btnValiderPrix").addEventListener("click", () => {
                            let prix = {};
                            energies.forEach((energie) => {
                                prix[energie] = document.getElementById("prix" + energie).value;
                            });
                            fetch("/stockEnergie/modifierPrix", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(prix)
                            })
                        })
                    
                    }
                    <button id="btnAnnulerPrix">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesPrix;