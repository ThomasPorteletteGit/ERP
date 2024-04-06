
import React , { useEffect } from "react";
import services from "../Services";

import ReactDOMServer from 'react-dom/server';
import searchIcon from '../../../assets/img/searchIcon.png';
import backArrow from '../../../assets/img/en-arriere.png';
import ReservationPlaceP from "../placeParking/ReservationPlaceP";
import { useHistory } from 'react-router-dom';
import EnregistrerCovoiturage from './EnregistrerCovoiturage';
import ServicesGrand from "../ServicesGrand";

const ServiceCoVoiturage = () => {
    // à récup dans la bd
    const Cov = [
        { id_cov: 142, statut: false, nomClient: "Dupond", date: "01/02/2024" },
        { id_cov: 324, statut: false, nomClient: "Outili", date: "01/02/2024" },
        { id_cov: 852, statut: true, nomClient: "Griffonnet", date: "01/02/2024" },
        { id_cov: 100, statut: false, nomClient: "Portelette", date: "01/02/2024" },
        { id_cov: 841, statut: true, nomClient: "Torri", date: "01/02/2024" },
        { id_cov: 345, statut: false, nomClient: "Wallner", date: "01/02/2024" },
        { id_cov: 645, statut: true, nomClient: "De La Cote", date: "01/02/2024" }, 
        { id_cov: 789, statut: true, nomClient: "Essalah", date: "01/02/2024" },

    ];
    
    // useEffect(() => {
    //     const boutonRetour = document.getElementById("backArrowServiceButton");
    //     if (boutonRetour != null) {
    //         boutonRetour.addEventListener('click', handleBackButtonClick);
            
    //     }
    // }, []);

    // const handleBackButtonClick = () => {
    //     const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    //     console.log("Retour à la page ServicesGrand");
    //     divGeneral.innerHTML = ReactDOMServer.renderToString(<ServicesGrand />);
    //     divGeneral.style.display = "block";
    // };

     // permet de récup la couleur en fonction du statut
     const getStatusColor = (statut) => {
        return statut ? 'green' : 'red';
    };

    document.addEventListener('click', function (event) {
        Cov.map(element => {
            const buttonReserver = document.getElementById("buttonReserverCov"+element.id_cov);
            const buttonSupprimer = document.getElementById("buttonSupprimerCov"+element.id_cov);

            if (buttonReserver === null || buttonSupprimer === null) {
                return;
            }

            buttonReserver.addEventListener("click", function() {
                
                enregistrerCOV(element.id_cov)
                
            });
            event.preventDefault();
    
            buttonSupprimer.addEventListener("click", function() {
                // Ajoutez votre logique pour le bouton Supprimer ici
                console.log(" ## SUPPRESSION proposition cov " + element.id_cov + " ##");
                // TODO SUPPRIMER RESERVATION BD
                

            });
            event.preventDefault();
        });
        event.preventDefault();
    });
    

    const afficherCov = () => {
        return Cov.map(element => (
            <div key={element.id_cov} className="propositions_covoiturage">
                <div className="proposition_covoiturage">
                    <div className="infoPropositionCov">

                        <div className="numCov">
                            <h2> Proposition n° {element.id_cov} </h2>
                        </div>

                        <div className="etatPropositionCov">
                            <span className={`statut-propositionCov ${getStatusColor(element.statut)}`}></span>
                        </div>

                    </div>

                    <div className="bouttonsCov">
                        
                        <button id={"buttonReserverCov"+element.id_cov} className="bouttonsCov" disabled={!element.statut} >Modifier</button>
                        <button id={"buttonSupprimerCov"+element.id_cov} className="bouttonsCov" disabled={element.statut} >Annuler</button>
                    
                    </div>
                </div>
            </div>
        ));
    }    
    
    
    
    return (

        <div className="composantPlaceP">
            <div className="Top_Component_Grand">
                <h2 className="titreComposantCov"> Proposition Co-Voiturage </h2>
            </div>

            <hr />
            <form className="formulaireRechercheCoV">

                    
                <button id="backArrowServiceButton" className="backArrowServiceButton" >Retour</button>
                <input type="text" name="text" className="search" placeholder=" Entrez un numéro de place " />
                <button type="submit" name="submit" className="submitSearchCov">
                    <img src={searchIcon} alt="Search" className="searchIconImage" />
                </button>
            </form>

            <button className="button_ajout_propositionCOV">
                <h2>Ajouter une proposition de covoiturage</h2>
            </button>

            <div className="container_proposition_Cov">
               {afficherCov()}
            </div>


        </div>
    );


    

};

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("backArrowServiceButton")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Retour":
                console.log("Bouton Retour aux services grands");
                // TODO: Ajouter code pour afficher les places de parking
                const divGeneral = document.getElementsByClassName("dashboard-right")[0];
                console.log("Reserver la place de parking");
                
                divGeneral.innerHTML = ReactDOMServer.renderToString(<ServicesGrand />);
                divGeneral.style.display = "block";
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
        event.stopPropagation();
    }

    if (event.target.classList.contains("button_ajout_propositionCOV")) {
        console.log("Ajouter une proposition de covoiturage");
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        divGeneral.innerHTML = ReactDOMServer.renderToString(<EnregistrerCovoiturage />);
        divGeneral.style.display = "block";
        event.preventDefault();
    }
});


// document.addEventListener('DOMContentLoaded', function (event) {    
//     const boutonRetour = document.querySelector("backArrowServiceButton");
//     console.log("Bouton retour" + boutonRetour);
//     if (boutonRetour != null) {

//         boutonRetour.addEventListener('click', () => {
//             const divGeneral = document.getElementsByClassName("dashboard-right")[0];
//             console.log("Reserver la place de parking");
            
//             divGeneral.innerHTML = ReactDOMServer.renderToString(<ServicesGrand />);
//             divGeneral.style.display = "block";
        
//         });
//     }
// });

function enregistrerCOV(id_cov) { // TODO mmodif -> covoiturage
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    console.log("Enregistrer une proposition de covoiturage");
    
    divGeneral.innerHTML = ReactDOMServer.renderToString(<EnregistrerCovoiturage />);
    divGeneral.style.display = "block";
}




export default ServiceCoVoiturage;
