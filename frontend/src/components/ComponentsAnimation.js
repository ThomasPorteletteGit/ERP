import React, {useEffect, useState} from 'react';
import ReactDOMServer from 'react-dom/server'
import SmallIcons from "./SmallIcons";

const ComponentsAnimation = () => {
    const [clickedComponent, setClickedComponent] = useState(null);
    let saveDiv;

    useEffect(() => {
        const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve'];

        const handleClick = (componentId) => () => {
            console.log('click ' + componentId);
            setClickedComponent(componentId)
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            saveDiv = divGeneral.innerHTML;
            divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={componentId} />);
        };

        const boutonRetour = document.getElementById("backArrow")

        boutonRetour.addEventListener("click", () => {
            const divGeneral = document.getElementsByClassName("dashboard-right")[0];
            if(saveDiv != null){
                divGeneral.innerHTML = saveDiv;
                components.forEach((componentId) => {
                    const component = document.getElementById(componentId);
                    if (component) {
                        component.addEventListener("click", handleClick(componentId));
                    }
                });
            }
        });

        components.forEach((componentId) => {
            const component = document.getElementById(componentId);
            if (component) {
                component.addEventListener("click", handleClick(componentId));
            }
        });
    }, []);

};

export default ComponentsAnimation;
