import React from 'react';
import pump from '../../assets/img/gas-pump.png';

const StatutPompe = ({ numeroPompe, carburant, quantite, prix }) => {

    const isAvailable = 1;  // provisoirement à récup dans la bd

    return (
        <div className={`statut-pompe ${isAvailable ? 'disponible' : 'indisponible'}`}>
            <div className="info-pompe">
                <img className="pompe-image" src={pump} alt={`${numeroPompe}`}/>
                <p className="numero">{numeroPompe}</p>
                <p className="carburant">{carburant}</p>
            </div>
            <div className='dispo-qte-prix'>
                <div className="disponibilite">
                    <div className={`rond ${isAvailable ? 'vert' : 'rouge'}`}/>
                </div>
                <div className="quantite-prix">
                    <p className="quantite">{quantite} L</p>
                    <p className="prix">{prix} €</p>
                </div>
                <div className="slider_Button">
                    <label className="switch">
                        <input className="chk" type="checkbox"/>
                        <span className="slider"></span>
                    </label>
                </div>
                </div>
            </div>
            );
            };

            export default StatutPompe;
