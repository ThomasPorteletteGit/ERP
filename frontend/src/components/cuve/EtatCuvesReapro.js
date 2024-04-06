import React from "react";

const EtatCuvesReapro = (energies) => {
    const energiesObject = energies.energies;

    const handleValiderReapro = async () => {
        let energiesReapro = [];
        energiesObject.forEach((energie) => {
            if (document.getElementById(energie).checked) {
                energiesReapro.push(energie);
            }
        });

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(energiesReapro)
        }
        await fetch("/stockEnergie/reapprovisionner", options);
    }

    return(
        <div id="cuvesPrix">
            <h3>Demande de réaprovisionnement</h3>
            <div className="Divflex">
                <div id="divPrix">
                    {
                    energiesObject.map((energie) => {
                        return (
                            <div className="Divflex" key={energie}>
                                <input type="checkbox" id={energie} name={energie}/>
                                <label for={energie}>{energie.nom}</label>
                            </div>
                        );
                    })}
                </div>
                <div className="DivBlock">
                    <button id="btnValiderReapro" onClick={handleValiderReapro}>Valider</button>
                    <button id="btnAnnulerReapro">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesReapro;