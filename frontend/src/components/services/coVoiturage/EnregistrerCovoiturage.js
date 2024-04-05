import React from "react";

import ReactDOMServer from 'react-dom/server';


const EnregistrerCovoiturage = () => {
    return (
        
        <div className="composantGrand DivBlock">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> Ajouter une proposition de co-voiturage </h2>
            </div>

            <div className="formulaire_enregistrer_covoiturage">

                <form>

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

                    <div className="boutonsAnnulationReservation">
                        <button type="submit" className="boutonAnnulerReservation">Annuler</button>
                        <button type="submit" className="boutonConfirmerReservation">Réserver</button>
                    </div>
                </form>


            </div>

            
            
        </div>         
    );   
    
};
export default EnregistrerCovoiturage;
