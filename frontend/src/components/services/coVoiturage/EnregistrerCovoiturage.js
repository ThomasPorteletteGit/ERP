import React from "react";

import ReactDOMServer from 'react-dom/server';
import ServiceCoVoiturage from "./ServiceCoVoiturage";


const EnregistrerCovoiturage = () => {
    return (
        
        <div className="composantGrand DivBlock" id="centPourCent">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> Ajouter une proposition de co-voiturage </h2>
            </div>


            <hr />

            <div className="formulaire_enregistrer_covoiturage">

                <form className="formCOV" >

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="nom">Nom :</label>
                        <input className="inputEnregistrementCovoiturage" type="text" id="nom" name="nom" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="prenom">Prénom :</label>
                        <input className="inputEnregistrementCovoiturage" type="text" id="prenom" name="prenom" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="email">Email :</label>
                        <input className="inputEnregistrementCovoiturage" type="email" id="email" name="email" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="telephone">Téléphone :</label>
                        <input className="inputEnregistrementCovoiturage" type="tel" id="telephone" name="telephone" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="date">Date voyage :</label>
                        <input className="inputEnregistrementCovoiturage" type="date" id="date" name="date" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="destination">Durée :</label>
                        <input className="inputEnregistrementCovoiturage" type="text" id="destination" name="destination" required></input>
                    </div>

                    
                </form>
                
            </div>
            <div className="boutonsAnnulationConfirmationCOV">
                        <button type="submit" className="boutonAnnulerProposition">Annuler</button>
                        <button type="submit" className="boutonConfirmerProposition">Ajouter la proposition</button>
            </div>

            
            
        </div>         
    );   
    
};

document.addEventListener("click", function (event) {

   
    if (event.target.classList.contains("boutonAnnulerProposition")) {

        console.log(" ## ANNULATION PROPOSITION COVOITURAGE ## ");
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];                
        divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceCoVoiturage />);
        divGeneral.style.display = "block";
        event.preventDefault();
        event.stopPropagation();
        
    }
    
    if (event.target.classList.contains("boutonConfirmerProposition")) {
        console.log(" ## CONFIRMATION PROPOSITION COVOITURAGE ## ");

        // TODO : Ajouter code pour enregistrer la proposition de covoiturage (bd)


        // const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        // divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceCoVoiturage />);
        // divGeneral.style.display = "block";
        event.preventDefault();
        event.stopPropagation();
    }
    event.stopPropagation();
});


 
export default EnregistrerCovoiturage;
