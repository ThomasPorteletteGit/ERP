import React from "react";

import ReactDOMServer from 'react-dom/server'
import ServiceParking from "./ServiceParking";

const ReservationPlaceP = ({id_placeP}) => {
    const id = id_placeP;
    console.log("id_placeP : " + id); 
    console.log(id_placeP);
    
    document.addEventListener("click", function (event) {

        if (event.target.classList.contains("boutonConfirmerReservation")) {
            if (document.getElementById("nom") != null && document.getElementById("prenom") != null && document.getElementById("email") != null && document.getElementById("telephone") != null && document.getElementById("date") != null && document.getElementById("duree") != null) {
                const nom = document.getElementById("nom").value;
                const prenom = document.getElementById("prenom").value;
                const email = document.getElementById("email").value;
                const telephone = document.getElementById("telephone").value;
                const date = document.getElementById("date").value;
                const duree = document.getElementById("duree").value;
                reserverPlaceP(nom, prenom, email, telephone, date, duree, id_placeP);
            } else {
                console.log("Tous les champs ne sont pas remplis");
            }
            
            // TODO: ENVOYER L'ID DE LA PLACE RESERVEE A LA BD
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            let saveDiv = divGeneral.innerHTML;

            divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceParking />);
            divGeneral.style.display = "block";
                
            
            event.preventDefault();
        }

        if (event.target.classList.contains("boutonAnnulerReservation")) {
            console.log("Annulation de la réservation de la place de parking");
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceParking />);
            divGeneral.style.display = "block";
            event.preventDefault();
        }
        
    });

    

    return (
        <div className="composantGrand DivBlock">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> Réservation de la place n° {id_placeP}</h2>
            </div>

            <hr/>

            <div className="formulaire_reservation_placeP">
                <form>
                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="nom">Nom :</label>
                        <input className="inputReservationPP" type="text" id="nom" name="nom" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="prenom">Prénom :</label>
                        <input className="inputReservationPP" type="text" id="prenom" name="prenom" required></input>
                    </div>

                    {/* <div className="formulaireEntree">
                    <label className="leftLabel" htmlFor="adresse">Adresse :</label>
                    <input className="inputReservationPP" type="tel" id="adresse" name="adresse" required></input>
                    </div> */}

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="email">Email :</label>
                        <input className="inputReservationPP" type="email" id="email" name="email" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="telephone">Téléphone :</label>
                        <input className="inputReservationPP" type="tel" id="telephone" name="telephone" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="date">Date de réservation :</label>
                        <input className="inputReservationPP" type="date" id="date" name="date" required></input>
                    </div>

                    <div className="formulaireEntree">
                        <label className="leftLabel" htmlFor="duree">Durée de réservation (en heures) :</label>
                        <input className="inputReservationPP" type="number" id="duree" name="duree" required></input>
                    </div>

                    <div className="boutonsAnnulationReservation">
                        <button type="submit" className="boutonAnnulerReservation">Annuler</button>
                        <button type="submit" className="boutonConfirmerReservation">Réserver</button>
                    </div>
                </form>
                  
                   
            </div>
          
        </div>         
    );   
   
    
};
    
function reserverPlaceP(nom, prenom, email, telephone, date, duree, id_placeP) {
    console.log("Réservation de la place de parking");


} 
        
export default ReservationPlaceP;