import React from "react";

const EtatCuvesReapro = ({energies}) => {

    const handleValiderReapro = async () => {
        let energiesReapro = [];
        const energieDivs = document.getElementsByClassName("defautreaprodiv");
        for (let i = 0; i < energieDivs.length; i++) {
            const energieDiv = energieDivs[i];
            const checkbox = energieDiv.getElementsByTagName("input")[0];
            if (checkbox.checked) {
                energiesReapro.push({nom: energieDiv.id});
            }
        }   
        console.log(energiesReapro);
        

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

    document.addEventListener("click", (e) => {
        if (e.target.id === "btnValiderReapro") {
            console.log("Valider");
            handleValiderReapro();
        }
    });

    return(
        <div id="cuvesPrix">
            <h3>Demande de réaprovisionnement</h3>
            <div className="Etatcuvediv">
                <div id="divPrixEtat">
                    {
                        energies.map((energie) => {
                            return (
                                <div className="defautreaprodiv" id={energie.nom}>
                                    <input type="checkbox" id={energie} name={energie}/>
                                    <label htmlFor={energie}>{energie.nom}</label>
                                </div>
                            );
                    })}
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