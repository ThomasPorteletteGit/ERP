import React, { useState } from 'react';
import pump from '../../assets/img/gas-pump.png';

const StatutPompe = ({ numeroPompe, carburant, quantite, prix }) => {
    const [sliderValue, setSliderValue] = useState(false); 

    // pour modifier le statut de la pompe à l'affichage (rond de couleur)
    const handleSliderChange = () => {
        setSliderValue(!sliderValue); 
    };

    return (
        <div className={`statut-pompe`}>
            <div className="info-pompe">
                <img className="pompe-image" src={pump} alt={`${numeroPompe}`} />
                <p className="numero">{numeroPompe}</p>
                <p className="carburant">{carburant}</p>
            </div>
            <div className='dispo-qte-prix'>
                <div className="disponibilite">
                    <div className={`rond ${sliderValue ? 'vert' : 'rouge'}`} />
                </div>
                <div className="quantite-prix">
                    <p className="quantite">{quantite} L</p>
                    <p className="prix">{prix} €</p>
                </div>
                <div className="slider_Button">
                    <label className="switch">
                        <input className="chk" type="checkbox" onChange={handleSliderChange} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StatutPompe;
