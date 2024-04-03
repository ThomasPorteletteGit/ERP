import React from "react";

const EtatCuvesReapro = () => {
    let energies = [];
    fetch("/stockEnergie/names")
    .then(response => response.json())
    .then(data => {
        energies = data;
        console.log(data);
    });
    return(
        <div id="cuvesPrix">
            <h3>Demande de réaprovisionnement</h3>
            <div className="Divflex">
                {/* <div id="divPrix">
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
                </div> */}

                <div id="divPrix">
                    {energies.map((energie) => {
                        return (
                            <div className="Divflex" key={energie}>
                                <input type="checkbox" id={energie} name={energie}/>
                                <label for={energie}>{energie.nom}</label>
                            </div>
                        );
                    })}
                </div>
                <div className="DivBlock">
                    <button id="btnValiderReapro">Valider</button>
                    {
                        document.getElementById("btnValiderReapro").addEventListener("click", () => {
                            let energiesReapro = [];
                            energies.forEach((energie) => {
                                if (document.getElementById(energie).checked) {
                                    energiesReapro.push(energie);
                                }
                            });
                            fetch("/stockEnergie/reapprovisionner", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(energiesReapro)
                            })
                        })
                    }
                    <button id="btnAnnulerReapro">Annuler</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesReapro;