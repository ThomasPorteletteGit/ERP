import React from "react";

import ReactDOMServer from 'react-dom/server'
import ServiceParking from "./ServiceParking";

const ReservationPlaceP = ({id_placeP}) => {
    const id = id_placeP;
    console.log("id_placeP : " + id_placeP); 
    return (
        <div className="composantGrand DivBlock">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> Réservation de la place n° {id_placeP}</h2>
            </div>

            <hr/>

            <div className="formulaire_reservation_placeP">
                <form>
                    <div className="formulaireEntree">
                        <label className="leftLabel" for="nom">Nom :</label>
                        <input className="inputReservationPP" type="text" id="nom" name="nom" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" for="prenom">Prénom :</label>
                        <input className="inputReservationPP" type="text" id="prenom" name="prenom" required></input>
                    </div>

                    {/* <div className="formulaireEntree">
                    <label className="leftLabel" for="adresse">Adresse :</label>
                    <input className="inputReservationPP" type="tel" id="adresse" name="adresse" required></input>
                    </div> */}

                    <div className="formulaireEntree">
                        <label className="leftLabel" for="email">Email :</label>
                        <input className="inputReservationPP" type="email" id="email" name="email" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" for="telephone">Téléphone :</label>
                        <input className="inputReservationPP" type="tel" id="telephone" name="telephone" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" for="date">Date de réservation :</label>
                        <input className="inputReservationPP" type="date" id="date" name="date" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" for="duree">Durée de réservation (en heures) :</label>
                        <input className="inputReservationPP" type="number" id="duree" name="duree" required></input>
                    </div>

                    <button type="submit" className="bouttonsServiceGrand">Réserver</button>
                </form>
                  
             
            </div>
          
        </div>         
    );   
    
};
    

export default ReservationPlaceP;