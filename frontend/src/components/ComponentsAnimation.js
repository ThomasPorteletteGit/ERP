import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "./SmallIcons";
import EtatCuvesGrand from "./EtatCuvesGrand";
import IncidentsGrand from './IncidentsGrand';
import ServicesGrand from './ServicesGrand';
import HoraireGrand from './HoraireGrand';

const ComponentsAnimation = () => {
    const [clickedComponent, setClickedComponent] = useState(null);
    let saveDiv;

    useEffect(() => {
        const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve'];
        const componentsGrand = [<EtatCuvesGrand />,"",<IncidentsGrand/>,"","",<ServicesGrand />,<HoraireGrand />,""];
                

        const handleClick = (componentId) => () => {
            console.log('click ' + componentId);
            setClickedComponent(componentId)
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            saveDiv = divGeneral.innerHTML;
            // divGeneral.innerHTML =  ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId}/>) + ReactDOMServer.renderToString(componentsGrand[components.indexOf(componentId)]);
            // divGeneral.style.display = "block";

            components.forEach((compId) => {
                const comp = document.getElementById(compId);
                if (comp) {
                    comp.classList.add("disappear-animation");
                }
            });

            setTimeout(() => {
                divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />) + ReactDOMServer.renderToString(componentsGrand[components.indexOf(componentId)] || componentsGrand[components.indexOf(componentId)] || componentsGrand[components.indexOf(componentId)]) || componentsGrand[components.indexOf(componentId)] ;
                divGeneral.style.display = "block";

                components.forEach((compId) => {
                    const comp = document.getElementById(compId);
                    if (comp) {
                        comp.classList.remove("disappear-animation");
                        comp.style.display = compId === componentId ? "block" : "none";
                    }
                });
            }, 500);

        };


        const boutonRetour = document.getElementById("backArrow")

        boutonRetour.addEventListener("click", () => {
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            if (saveDiv != null) {
                divGeneral.style.display = "flex";
                divGeneral.innerHTML = saveDiv;
                components.forEach((componentId) => {
                    const component = document.getElementById(componentId);
                    if (component) {
                        const img = component.querySelector('#imgAgrandir');
                        if (img) {
                            console.log('add event listener for ' + componentId);
                            img.addEventListener("click", handleClick(componentId));
                        }
                    }
                });
            }
        });

        components.forEach((componentId) => {
            const component = document.getElementById(componentId);
            if (component) {
                const img = component.querySelector('#imgAgrandir');
                if (img) {
                    console.log('add event listener for ' + componentId);
                    img.addEventListener("click", handleClick(componentId));
                }
            }
        });

        document.addEventListener("click", function (event) {
            if (event.target.classList.contains("btnCuvesGrandClick")) {
                const buttonText = event.target.textContent;
                switch (buttonText) {
                    case "Modifier le prix":
                        console.log("Bouton 'Modifier le prix' cliqué");
                        break;
                    case "Demande de réapprovisionnement":
                        console.log("Bouton 'Demande de réaprovisionnement' cliqué");
                        break;
                    default:
                        console.log("Bouton inconnu cliqué" + buttonText);
                        break;
                }
                event.preventDefault();

            }
        });




    }, []);

};

export default ComponentsAnimation;
