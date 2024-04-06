import React, { useState } from 'react';
import pump from '../../assets/img/gas-pump.png';



const StatutPompe = ({ numeroPompe, carburant, quantite, prix, statut}) => {
    const [sliderValue, setSliderValue] = useState(statut); 

    // pour modifier le statut de la pompe à l'affichage (rond de couleur)
    const handleSliderChange = async () => {
        setSliderValue(!sliderValue); 
        let boolean = !sliderValue;
        console.log(boolean);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: numeroPompe, statut: boolean})
        }
        await fetch("/pompes/setState", options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
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
                        <input className="chk" type="checkbox" onChange={handleSliderChange} checked={sliderValue} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StatutPompe;
