import React from "react";
import PropTypes from "prop-types";
import direction from "./direction/Direction";
import ReactDOMServer from "react-dom/server";
import EtatCuvesPrix from "./cuve/EtatCuvesPrix";
import EtatCuvesReapro from "./cuve/EtatCuvesReapro";

const SmallIcons = ({ iconClicked }) => {
    const componentsClicked = iconClicked;
    console.log(componentsClicked);
    const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve'];

    const emojis = {
        'etat-cuves': '🛢️',
        'direction': '👩‍💼',
        'incidents': '⚠️',
        'transaction': '💸',
        'stocks': '📦',
        'services': '⚒️',
        'horaires': '🕐',
        'releve': '📋'
    };

    let divs = [];

    components.forEach(component => {
        if (component !== iconClicked) {
            divs.push(<div className="smallIcon" key={component}>{emojis[component]}</div>);
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("smallIcon")) {
            const buttonText = event.target.textContent;
            switch (buttonText) {
                default:
                    for (const key in emojis) {
                        if (emojis[key] === buttonText) {
                            console.log(key);
                        }
                    }
            }
            event.preventDefault();
        }
    });

    return (
        <div className="smallIcons">
            {divs}
        </div>
    );
};

SmallIcons.propTypes = {
    iconClicked: PropTypes.string.isRequired
};

export default SmallIcons;
