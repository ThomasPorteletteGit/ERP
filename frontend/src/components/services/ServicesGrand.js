import React from "react";
import services from "./Services";

import ReactDOMServer from 'react-dom/server';
import ServiceParking from "./placeParking/ServiceParking";
import ServiceCoVoiturage from "./coVoiturage/ServiceCoVoiturage";
import ServiceLivraison from "./livraison/ServiceLivraison";

const ServicesGrand = () => {
    return (
        
        <div className="composantGrand DivBlock">
            <div className="Top_Component_Grand">
                <h2 className="component_title"> ⚒️ Services</h2>
            </div>

            <hr/>
            <div className="button_container_grand_services">
                    <button className="bouttonsServiceGrand">Parking</button>
                    <button className="bouttonsServiceGrand">Co-voiturage</button>
                    <button className="bouttonsServiceGrand">Livraison</button>
                    <button className="bouttonsServiceGrand">Autres</button>
            </div>
          
        </div>         
    );   
    
};

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("bouttonsServiceGrand")) {
        const buttonText = event.target.textContent;
        switch (buttonText) {
            case "Parking":
                console.log("Bouton Service -> parking cliqué");
                // TODO: Ajouter code pour afficher les places de parking
                afficherPlacesParking();
                break;
            case "Co-voiturage":
                console.log("Bouton 'Co-voiturage' cliqué");
                afficherVueCoVoiturage();
                break;
            case "Livraison":
                console.log("Bouton 'Livraison' cliqué");
                afficherVueLivraison();
                break;
            case "Autres":
                console.log("Bouton 'Autres' cliqué");
                break;
            default:
                console.log("Bouton inconnu cliqué" + buttonText);
                break;
        }
        event.preventDefault();
    }

    function afficherPlacesParking() {
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        let saveDiv = divGeneral.innerHTML;
        console.log("Afficher les places de parking");
        
        divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceParking />);
        divGeneral.style.display = "block";

    }

    function afficherVueCoVoiturage () {
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        let saveDiv = divGeneral.innerHTML;
        console.log("Afficher les propositions de co-voiturage");
        
        divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceCoVoiturage />);
        divGeneral.style.display = "block";
    }

    function afficherVueLivraison () {

        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        let saveDiv = divGeneral.innerHTML;
        console.log("Afficher les livraisons");
        
        divGeneral.innerHTML = ReactDOMServer.renderToString(<ServiceLivraison />);
        divGeneral.style.display = "block";

    }
});

export default ServicesGrand;
