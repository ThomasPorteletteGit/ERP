import React from 'react';
import PropTypes from 'prop-types';

const Cuve = ({ carburant, niveau }) => {
    const capaciteMax = 100;

    return (
        <div className="cuve-container">
            <h2>{carburant}</h2>
            <div className="jauge">
                <div className="progress-bar" style={{ height: `calc((100% - 10px) * ${niveau} / ${capaciteMax})` }} />
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
