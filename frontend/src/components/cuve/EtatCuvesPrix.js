import React from "react";

const EtatCuvesPrix = ({energies}) => {
    const energiesObject= energies.map((array) => {
        return { nom: array[0], prix: array[1] };
    });
    const handleValiderPrix = async () => {
        let prix = [];
        energiesObject.forEach((energie) => {
            let prixEnergie = document.getElementById("prix" + energie.nom).value;
            prix.push({ nom: energie.nom, prix: prixEnergie });
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

    document.addEventListener("click", function (event) {
        if (event.target.id === "btnValiderPrix") {
            handleValiderPrix();
        }
        else if (event.target.id === "btnAnnulerPrix") {
            console.log("Annulation des modifications");
        }
    });

    return (
        <div id="cuvesPrix">
            <h3>Modification du prix</h3>
            <div className="Divflex">
                <div id="divPrix">
                    {
                        energies.map((array) => {
                            return (
                                <div className="Divflex" key={array[0]}>
                                    <label for={array[0]}>{array[0]}</label>
                                    <input type="number" id={"prix" + array[0]} name={array[0]} defaultValue={array[1]} step="0.01" min="0" required/>
                                </div>
                            );
                    })}
                </div>
                <div className="DivBlock">
                    <button id="btnValiderPrix">Valider</button>
                </div>
            </div>
        </div>
    );
}

export default EtatCuvesPrix;