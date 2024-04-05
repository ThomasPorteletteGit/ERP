import React from "react";
import ReactDOMServer from 'react-dom/server'
import PropTypes from "prop-types";
import EtatCuvesGrand from "./cuve/EtatCuvesGrand";
import DirectionGrand from "./direction/DirectionGrand";
import IncidentsGrand from "./incidents/IncidentsGrand";
import ServicesGrand from "./services/ServicesGrand";
import HoraireGrand from "./horaire/HoraireGrand";
import Especes from "./paiement/Especes";
import CarteBancaire from "./paiement/CarteBancaire";
import ChoixPaiementCarteEnergie from "./paiement/ChoixPaiementCarteEnergie";
import EtatStockGrand from "./stocks/EtatStocksGrand";

const SmallIcons = ({ iconClicked }) => {
    console.log(iconClicked);
    const components = ['etat-cuves', 'direction', 'incidents', 'transaction', 'stocks', 'services', 'horaires', 'releve', 'esp', 'cb', 'carteEnergie'];
    const componentsGrand = [<EtatCuvesGrand />, <DirectionGrand />, <IncidentsGrand />, "", <EtatStockGrand />, <ServicesGrand />, <HoraireGrand />, "", <Especes />, <CarteBancaire />, <ChoixPaiementCarteEnergie />];

    const emojis = {
        'etat-cuves': '🛢️',
        'direction': '👩‍💼',
        'incidents': '⚠️',
        'transaction': '💸',
        'stocks': '📦',
        'services': '⚒️',
        'horaires': '🕐',
        'releve': '📋',
        'esp': '💵',
        'cb': '💳',
        'carteEnergie': '🔋'
    };

    let divs = [];

    components.forEach(component => {
        if (component !== iconClicked) {
            divs.push(<div className="smallIcon" key={component}>{emojis[component]}</div>);
        }
    });

    let isListener = false;

    const divGeneral = document.getElementsByClassName("dashboard-right")[0];
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("smallIcon") && !isListener) {
            isListener = true;
            const buttonText = event.target.textContent;
            switch (buttonText) {
                default:
                    for (const key in emojis) {
                        if (emojis[key] === buttonText) {
                            divGeneral.innerHTML = ReactDOMServer.renderToString(<SmallIcons iconClicked={key} />);
                        }
                    }
            }
            event.stopPropagation();
            event.preventDefault();
        }
    });

    return (
        <>
            <div className="smallIcons">
                {divs}
            </div>
            <div className="DivBlock">
                {(componentsGrand[components.indexOf(iconClicked)])}
            </div>
        </>
    );
};

SmallIcons.propTypes = {
    iconClicked: PropTypes.string.isRequired
};

export default SmallIcons;
