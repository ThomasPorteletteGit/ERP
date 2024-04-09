import React from "react";

const EtatCuvesReapro = ({energies}) => {

    const handleValiderReapro = async () => {
        let energiesReapro = [];
        energies.forEach((energie) => {
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
        await fetch("/stockEnergie/reapprovisionner", options).then(response => response.json()).then(data => {
            window.location.reload();
        });
    }

    return(
        <div id="cuvesPrix">
            <h3>Demande de réaprovisionnement</h3>
            <div className="Etatcuvediv">
                <div id="divPrixEtat">
                    {
                        energies.map((energie) => {
                            return (
                                <div className="defautreaprodiv" key={energie}>
                                    <input type="checkbox" id={energie} name={energie}/>
                                    <label for={energie}>{energie.nom}</label>
                                </div>
                            );
                    })}
                </div>
                <div className="btnEtat">
                    <button id="btnValiderReapro" onClick={handleValiderReapro}>Valider</button>
                    <button id="btnAnnulerReapro">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesReapro;