import React , { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import services from "../Services"; 
import searchIcon from '../../../assets/img/searchIcon.png';
import ReservationPlaceP from "./ReservationPlaceP"; 
import SmallIcons from "../../SmallIcons";
import ServicesGrand from "../ServicesGrand";

const ServiceParking = () => {
    // à récup dans la bd
    const placesParking = [
        { id_placeParking: 142, est_libre: false },
        { id_placeParking: 5548, est_libre: true },
        { id_placeParking: 122, est_libre: true },
        { id_placeParking: 8425, est_libre: false },
        { id_placeParking: 68532, est_libre: true },
        { id_placeParking: 2368, est_libre: false },
        { id_placeParking: 85, est_libre: true },
        { id_placeParking: 23, est_libre: true },

    ];


    // permet de récup la couleur en fonction du statut
    const getStatusColor = (est_libre) => {
        return est_libre ? 'green' : 'red';
    };

    const afficherPlacesParking = () => {
        return placesParking.map(element => (
            <div key={element.id_placeParking} className="places_parking">
                <div className="place_parking">
                    <div className="infoPlaceP">

                        <div className="numPlaceParking">
                            <h2> Place numéro : {element.id_placeParking} </h2>
                        </div>

                        <div className="etatPlaceParking">
                            <span className={`statut-placeP ${getStatusColor(element.est_libre)}`}></span>
                        </div>

                    </div>

                    <div className="bouttonsParking">
                        
                        <button id={"buttonReserverPlace"+element.id_placeParking} className="bouttonsParking" disabled={!element.est_libre} >Réserver</button>
                        <button id={"buttonSupprimerPlace"+element.id_placeParking} className="bouttonsParking" disabled={element.est_libre} >Annuler</button>
                    
                    </div>
                </div>
            </div>
        ));
    }    
    document.addEventListener('click', function (event) {
        placesParking.map(element => {
            const buttonReserver = document.getElementById("buttonReserverPlace"+element.id_placeParking);
            const buttonSupprimer = document.getElementById("buttonSupprimerPlace"+element.id_placeParking);

            if (buttonReserver === null || buttonSupprimer === null) {
                return;
            }

            buttonReserver.addEventListener("click", function() {
                console.log(" ## RESERVATION PLACE " + element.id_placeParking + " ## ");
               reserverPlaceParking(element.id_placeParking)
                
            });
            event.preventDefault();
            //event.stopPropagation();
    
            buttonSupprimer.addEventListener("click", function() {
                // Ajoutez votre logique pour le bouton Supprimer ici
                console.log(" ## SUPPRESSION RESERVATION " + element.id_placeParking + " ##");
                // TODO SUPPRIMER RESERVATION BD
                

            });
            event.preventDefault();
            // event.stopPropagation();
        });
        event.preventDefault();
        event.stopPropagation();
    });
    
    
    
    return (

        <div className="composantPlaceP">
            <div className="Top_Component_Grand">
                <h2 className="titreComposantPP"> Places de parking </h2>
            </div>

            <hr />

            
            <form className="formulaireRecherchePlaceP">
                <button id="backArrowServiceButton" className="backArrowServiceButton" >Retour</button>
                <input type="text" name="text" className="search" placeholder=" Entrez un numéro de place " />
                <button type="submit" name="submit" className="submitSearchParking">
                    <img src={searchIcon} alt="Search" className="searchIconImage" />
                </button>
            </form>

            <div className="container_placesP">
                {afficherPlacesParking()}
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
                const divGeneral = document.getElementsByClassName("dashboard-right")[0];
                console.log("Retour aux services grands");
                // Rendu du composant SmallIcons
                const smallIconsComponent = ReactDOMServer.renderToString(<SmallIcons iconClicked="services" />);
                // Rendu du composant ServiceCoVoiturage
                const servicesGrandCOmponent = ReactDOMServer.renderToString(<ServicesGrand />);
                divGeneral.innerHTML = smallIconsComponent ; //+ servicesGrandCOmponent;
                divGeneral.style.display = "block";
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }
});

function reserverPlaceParking(id_placeP) {
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    console.log("Reserver la place de parking");
    
    divGeneral.innerHTML = ReactDOMServer.renderToString(<ReservationPlaceP id_placeP={id_placeP}/>);
    divGeneral.style.display = "block";
}

export default ServiceParking;
