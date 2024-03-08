import React, { useEffect } from 'react';
import Caisse from "./Caisse";
import Cuve from "./Cuve";
import Direction from "./Direction";

const ComponentsAnimation = () => {
    useEffect(() => {

        const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires',  'releve'];

        const boutonRetour = document.getElementById("backArrow");
        boutonRetour.addEventListener("click", () => {
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    component.style.display = "block";
                }
            });
        });


        const handleClick = (componentId) => () => {
            console.log('click ' + componentId);
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    component.style.display = "none";
                }
            });
        };

        components.forEach((componentId) => {
            const component = document.getElementById(componentId);
            if (component) {
                component.addEventListener("click", handleClick(componentId));
            }
        });

        return () => {
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    component.removeEventListener("click", handleClick);
                }
            });
        };
    }, []);


};

export default ComponentsAnimation;
