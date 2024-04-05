import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "../SmallIcons";
import Especes from '../paiement/Especes';
import CarteBancaire from '../paiement/CarteBancaire';
import ChoixPaiementCarteEnergie from '../paiement/ChoixPaiementCarteEnergie';

const ChoixduPaiementCompAnim = () => {
    const [clickedComponent, setClickedComponent] = useState(null);
    let saveDiv;


    useEffect(() => {
        const divGeneral = document.getElementsByClassName("dashboard-right")[0];
        saveDiv = divGeneral.innerHTML;
        const cpdboutton = ['esp', 'cb', 'carteEnergie', 'autre']
        const componentsGrand = [""];
        // const componentsIncidentGrand = ["", "", <IncidentsGrand />, "", "", "", "", ""];

        const handleClick = (componentId) => () => {
            console.log('click ' + componentId);
            setClickedComponent(componentId)
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];

            cpdboutton.forEach((compId) => {
                const comp = document.getElementById(compId);
                if (comp) {
                    comp.classList.add("disappear-animation");
                }
            });

            setTimeout(() => {
                divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />) + ReactDOMServer.renderToString(componentsGrand[cpdboutton.indexOf(componentId)]);
                divGeneral.style.display = "block";

                cpdboutton.forEach((compId) => {
                    const comp = document.getElementById(compId);
                    if (comp) {
                        comp.classList.remove("disappear-animation");
                        comp.style.display = compId === componentId ? "block" : "none";
                    }
                });
            }, 500);

        };

        const cdpBoutons = document.querySelectorAll(".cdpbouton");

        cdpBoutons.forEach((btn) => {
            btn.addEventListener("click", handleClick(btn.id));
        });


    }, []);

};

export default ChoixduPaiementCompAnim;
