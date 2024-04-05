import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "./SmallIcons";
import EtatCuvesGrand from "./cuve/EtatCuvesGrand";
import IncidentsGrand from './incidents/IncidentsGrand';
import ServicesGrand from './services/ServicesGrand';
import DirectionGrand from './direction/DirectionGrand';
import HoraireGrand from './horaire/HoraireGrand';
import TransactionGrand from './transaction/TransactionGrand';

const ComponentsAnimation = () => {
    const [clickedComponent, setClickedComponent] = useState(null);
    let saveDiv;



    useEffect(() => {
        const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve', 'choixpaiement', 'esp', 'cb', 'carteEnergie'];

        function attachEventListeners() {
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    const img = component.querySelector('#imgAgrandir');
                    const btnesp = component.querySelector('#esp');
                    const btncb = component.querySelector('#cb');
                    const btnce = component.querySelector('#carteEnergie');
                    if (img) {
                        console.log('add event listener for ' + componentId);
                        img.addEventListener("click", handleClick(componentId));
                    }
                    if (btnesp) {
                        btnesp.addEventListener("click", handleClick(componentId));
                    }
                    if (btncb) {
                        btncb.addEventListener("click", handleClick(componentId));
                    }
                    if (btnce) {
                        btnce.addEventListener("click", handleClick(componentId));
                    }
                }
            });
        }

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
                divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />);
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
                attachEventListeners();
            }
        });

        attachEventListeners();






    }, []);

};

export default ComponentsAnimation;
