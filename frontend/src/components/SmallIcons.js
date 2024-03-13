import React from "react";
import PropTypes from "prop-types";
import direction from "./Direction";

const SmallIcons = ({iconClicked}) => {
    const componentsCliked = iconClicked;
    console.log(componentsCliked);
    const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires',  'releve'];

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


    components.forEach(component => {
        console.log(component + " " + iconClicked);
        if (component != iconClicked) {
            console.log(component + " : " + emojis[component]);
        }
    });

};

SmallIcons.prototype = {
    iconClicker : PropTypes.string.isRequired
}
export default SmallIcons;