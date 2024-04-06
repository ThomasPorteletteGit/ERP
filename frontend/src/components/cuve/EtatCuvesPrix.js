import React from "react";

const EtatCuvesPrix = (energies) => {
    const energiesObject = energies.energies;

    const handleValiderPrix = async () => {
        let prix = [];
        energiesObject.forEach((energie) => {
            prix.push({ nom: energie, prix: document.getElementById("prix" + energie).value });
        });
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(prix)
        }
        await fetch("/stockEnergie/modifierPrix", options);
    }

    return (
        <div id="cuvesPrix">
            <h3>Modification du prix</h3>
            <div className="Divflex">
                <div id="divPrix">
                    {
                        energiesObject.map((energie, price) => {
                            return (
                                <div className="Divflex" key={energie}>
                                    <label htmlFor={"prix" + energie}> ● Prix de {energie} : </label>
                                    <input type="number" id={"prix" + energie} name={"prix" + energie} min="0" max="10" step="0.001" value={price} />
                                </div>
                            );
                    })}
                </div>
                <div className="DivBlock">
                    <button id="btnValiderPrix" onClick={handleValiderPrix}>Valider</button>
                    <button id="btnAnnulerPrix">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesPrix;