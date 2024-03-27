import React from "react";
import services from "./Services";
import searchIcon from '../../assets/img/searchIcon.png';

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

    

    // const getReserve = (statut) => {
    //     return type === 'CB' ? 'cb-payment' : type === 'ESP' ? 'esp-payment' : '';
    // };

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
                        
                        <button id="bouttonReservationPlaceP" disabled={!element.est_libre} onClick={reserverPlaceParking(element.id_placeParking, element.est_libre)}> Réserver </button>
                        <button id="bouttonSupprimerPlaceP" disabled={element.est_libre} > Annuler </button>
                    
                    </div>
                </div>
            </div>
        ));
    }

    return (

        <div className="composantPlaceP">
        <div className="Top_Component_Grand">
            <h2 className="titreComposantPP"> Places de parking </h2>
        </div>
        
           <hr/>
           
            <form className="formulaireRecherchePlaceP"> 
                <input type="text" name="text" className="search" placeholder=" Entrez un numéro de place "/>
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

function reserverPlaceParking (id_placeParking, est_libre) {
    // TODO (Modifs avec la bd)
    
    if (est_libre) {
        alert("Place de parking " + id_placeParking + " réservée");
    }

}

export default ServiceParking;
