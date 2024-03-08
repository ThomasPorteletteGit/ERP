import React, { useEffect, useState } from 'react';
import SmallIcons from "./SmallIcons";
import Cuve from "./Cuve";

const ComponentsAnimation = () => {
    const [clickedComponent, setClickedComponent] = useState(null);

    useEffect(() => {
        const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve'];

        const handleClick = (componentId) => () => {
            console.log('click ' + componentId);
            setClickedComponent(componentId);
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    component.style.display = 'none';
                }
            });
        };

        const boutonRetour = document.getElementById("backArrow")

        boutonRetour.addEventListener("click", () => {
            components.forEach((componentId) => {
                const component = document.getElementById(componentId);
                if (component) {
                    component.style.display = "block";
                }
            });
        });

        components.forEach((componentId) => {
            const component = document.getElementById(componentId);
            if (component) {
                component.addEventListener("click", handleClick(componentId));
            }
        });

    }, []);

    return (
        <>
            <SmallIcons iconClicked={clickedComponent} />
        </>
    );
};

export default ComponentsAnimation;
