import React from "react";
import PropTypes from "prop-types";
import direction from "./direction/Direction";

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
