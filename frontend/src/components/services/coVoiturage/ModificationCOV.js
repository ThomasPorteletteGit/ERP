import React from "react";

import ReactDOMServer from 'react-dom/server';
import ServiceCoVoiturage from "./ServiceCoVoiturage";


const ModificationCOV = ({id_cov}) => {

    return (
        
        <div className="composantGrand DivBlock" id="centPourCent">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> Modififier la proposition n° {id_cov}</h2>
            </div>


            <hr />

            <div className="formulaire_enregistrer_covoiturage">

                <form className="formCOV">

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="nom">Nom :</label>
                        <input className="inputEnregistrementCovoiturage" type="text" id="nom" name="nom" required placeholder={getNomSelonId(id_cov)}></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="prenom">Prénom :</label>
                        <input className="inputEnregistrementCovoiturage" type="text" id="prenom" name="prenom" required placeholder={getPrenomSelonId(id_cov)}></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="email">Email :</label>
                        <input className="inputEnregistrementCovoiturage" type="email" id="email" name="email" required placeholder={getEmailSelonId(id_cov)} ></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="telephone">Téléphone :</label>
                        <input className="inputEnregistrementCovoiturage" type="tel" id="telephone" name="telephone" required placeholder={getTelephoneSelonId(id_cov)}></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="date">Date voyage :</label>
                        <input className="inputEnregistrementCovoiturage" type="date" id="date" name="date" required placeholder={getDateSelonId(id_cov)}></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="destination">Durée :</label>
                        <input className="inputEnregistrementCovoiturage" type="text" id="destination" name="destination" required placeholder={getDestinationSelonId(id_cov)}></input>
                    </div>

                    
                </form>
                
            </div>
            <div className="boutonsAnnulationConfirmationCOV">
                        <button type="submit" className="boutonAnnulerProposition">Annuler</button>
                        <button type="submit" className="boutonConfirmerModification">Modifier</button>
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
    
    if (event.target.classList.contains("boutonConfirmerModification")) {
        console.log(" ## CONFIRMATION PROPOSITION COVOITURAGE ## ");

        // TODO : Ajouter code pour enregistrer la modification de proposition de covoiturage (bd)


        // const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        // divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceCoVoiturage />);
        // divGeneral.style.display = "block";
        event.preventDefault();
        event.stopPropagation();
    }
    event.stopPropagation();
});

function getNomSelonId(id_cov) {
    // TODO : Ajouter code pour retourner le nom de la personne selon id_cov BD !!
    return "Nom";
}

function getPrenomSelonId(id_cov) {
    // TODO : Ajouter code pour retourner le prenom de la personne selon id_cov BD !!
    return "Prenom";
}

function getEmailSelonId(id_cov) {
    // TODO : Ajouter code pour retourner l'email de la personne selon id_cov BD !!
    return "Email";
}

function getTelephoneSelonId(id_cov) {
    // TODO : Ajouter code pour retourner le telephone de la personne selon id_cov BD !!
    return "Telephone";
}

function getDateSelonId(id_cov) {
    // TODO : Ajouter code pour retourner la date de la personne selon id_cov BD !!
    return "03/01/2025";
}

function getDestinationSelonId(id_cov) {
    // TODO : Ajouter code pour retourner la destination de la personne selon id_cov BD !!
    return "Destination";
}
 
export default ModificationCOV;
