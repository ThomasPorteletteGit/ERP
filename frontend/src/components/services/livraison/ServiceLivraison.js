import React from "react";
import services from "../Services";

import ReactDOMServer from 'react-dom/server';
import ServiceParking from "../placeParking/ServiceParking";
import ServiceCoVoiturage from "../coVoiturage/ServiceCoVoiturage";

import ServicesGrand from "../ServicesGrand";
import searchIcon from '../../../assets/img/searchIcon.png';
import SmallIcons from "../../SmallIcons";

const ServiceLivrasion = () => {
    const Cov = [
        { id_livraison: 142, statut: false, nomClient: "Dupond", date: "01/02/2024" },
        { id_livraison: 324, statut: false, nomClient: "Outili", date: "01/02/2024" },
        { id_livraison: 852, statut: true, nomClient: "Griffonnet", date: "01/02/2024" },
        { id_livraison: 100, statut: false, nomClient: "Portelette", date: "01/02/2024" },
        { id_livraison: 841, statut: true, nomClient: "Torri", date: "01/02/2024" },
        { id_livraison: 345, statut: false, nomClient: "Wallner", date: "01/02/2024" },
        { id_livraison: 645, statut: true, nomClient: "De La Cote", date: "01/02/2024" }, 
        { id_livraison: 789, statut: true, nomClient: "Essalah", date: "01/02/2024" },

    ];
    
     // permet de récup la couleur en fonction du statut
     const getStatusColor = (statut) => {
        return statut ? 'green' : 'red';
    };

    const afficherLivraisons = () => {
        return Cov.map(element => (
            <div key={element.id_livraison} className="livraisons">
                <div className="livraison">
                    <div className="infoLivraison">

                        <div className="numLivraison">
                            <h2> Livraison n° {element.id_livraison} </h2>
                        </div>

                        <div className="statutLivraison">
                            <h2> Statut : </h2>
                            <span className={`statut-livraison ${getStatusColor(element.statut)}`}></span>
                        </div>

                    </div>

                    <div className="infoClientLivraison">
                        <h3> Client : {element.nomClient} </h3>
                        <h3> Date : {element.date} </h3>
                    </div>

                    <div className="buttonsLivraison">
                        
                        <button id={"buttonModiferLivraison"+element.id_livraison} className="buttonsLivraison" disabled={!element.statut} >Modifier</button>
                        <button id={"buttonSupprimerLivraison"+element.id_livraison} className="bouttonsLivraison" disabled={element.statut} >Annuler</button>
                    
                    </div>
                </div>
            </div>
        ));
    }    
    document.addEventListener('click', function (event) {
        Cov.map(element => {
            const buttonModifer = document.getElementById("buttonModiferLivraison"+element.id_livraison);
            const buttonSupprimer = document.getElementById("buttonSupprimerLivraison"+element.id_livraison);

            if (buttonModifer === null || buttonSupprimer === null) {
                return;
            }

            buttonModifer.addEventListener("click", function() {
                console.log(" Modification Livraison " + element.id_livraison + " ## ");
                enregistrerLivraison(element.id_livraison)
                
            });
            event.preventDefault();
    
            buttonSupprimer.addEventListener("click", function() {
                // Ajoutez votre logique pour le bouton Supprimer ici
                console.log(" ## Supression Livraison " + element.id_livraison + " ##");
                // TODO SUPPRIMER Livraison BD
                

            });
            event.preventDefault();
        });
        event.preventDefault();
    });
    
    
    
    return (

        <div className="composantPlaceP">
            <div className="Top_Component_Grand">
                <h2 className="titreComposantLivraison"> Livraisons</h2>
            </div>

            <hr />

            <form className="formulaireRechercheLivraison">

                <button id="backArrowServiceButton" className="backArrowServiceButton" >Retour</button>
                
                <input type="text" name="text" className="search" placeholder=" Entrez un numéro de livraison " />
                
                <button type="submit" name="submit" className="submitSearchLivraison">
                    <img src={searchIcon} alt="Search" className="searchIconImage" />
                </button>
            
            </form>

            <div className="container_livraison">
               {afficherLivraisons()}
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
                divGeneral.innerHTML = smallIconsComponent ; // + servicesGrandCOmponent;
                divGeneral.style.display = "block";
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
        event.stopPropagation();
    }
});

function enregistrerLivraison (id_livraison) { // TODO mmodif -> covoiturage
    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    console.log("Enregistrer la livraison " + id_livraison + " ##");
    
   // divGeneral.innerHTML = ReactDOMServer.renderToString(<ModifierLivraison id_livraison={id_livraison}/>);
   // divGeneral.style.display = "block";
}



export default ServiceLivrasion;
