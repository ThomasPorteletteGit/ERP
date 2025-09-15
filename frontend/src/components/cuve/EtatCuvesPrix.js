import React from "react";

const EtatCuvesPrix = ({energies}) => {
    const energiesObject= energies.map((array) => {
        return { nom: array[0], prix: array[1] };
    });
    const handleValiderPrix = async () => {
        let prix = [];
        console.log(energiesObject);
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
        await fetch("/stockEnergie/modifierPrix", options).then(response => response.json()).then(data => {
            window.location.reload();
        });
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
            <div className="Etatcuvediv">
                <div id="divPrix">
                    {
                        energies.map((array) => {
                            return (
                                <div className="defautcuvediv" key={array[0]}>
                                    <label for={array[0]}>{array[0]}</label>
                                    
                                </div>
                            );
                    })}
                </div>
                <div className="defautcuveinput">
                    {
                        energies.map((array) => {
                            return (
                                <input type="number" id={"prix" + array[0]} name={"prix" + array[0]} min="0" max="10" step="0.1" value={array[1]} />
                            );
                    })}
                </div>
                <div className="DivBlock">
                    <button id="btnValiderPrix" className="button_style">Valider</button>
                    <button id="btnAnnulerPrix" className="button_style">Annuler</button>
                </div>
            </div>
        </div>
    );
}



export default EtatCuvesPrix;