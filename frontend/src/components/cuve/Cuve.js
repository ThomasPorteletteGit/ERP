import React from 'react';
import PropTypes from 'prop-types';

const Cuve = ({ carburant, niveau }) => {
    const capaciteMax = 100;

    //calculer la couleur en fonction du niveau
    const calculerCouleur = (niveau) => {
        const pourcentage = (niveau / capaciteMax) * 100;
        const rouge = Math.round(255 * (pourcentage / 100));
        const vert = Math.round(255 * ((100 - pourcentage) / 100));
        return `rgb(${vert}, ${rouge}, 0)`;
    };
    const barreProgressionStyle = {
        height: `calc((100% - 10px) * ${niveau} / ${capaciteMax})`,
        backgroundColor: calculerCouleur(niveau),
    };

    return (
        <div className="cuve-container">
            <h2>{carburant}</h2>
            <div className="jauge">
                <div className="progress-bar" style={barreProgressionStyle} />
            </div>
            {/* <p>{`Niveau actuel: ${niveau}/${capaciteMax}`}</p> */}
        </div>
    );
};

Cuve.propTypes = {
    carburant: PropTypes.string.isRequired,
    niveau: PropTypes.number.isRequired,
};

export default Cuve;
