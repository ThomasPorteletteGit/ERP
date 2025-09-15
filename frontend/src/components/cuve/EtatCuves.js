import React from 'react';
import Cuve from './Cuve';
import agrandir from '../../assets/img/agrandir.png';


const EtatCuves = ({energies}) => {
    return (
        <section id="etat-cuves">
            <div className="top_container">
                <h2 className='component-title'>🛢️ Etat des cuves</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="etat-cuves-container">
                {
                    energies.map((energie) => {
                        return <Cuve carburant={energie.nom} niveau={energie.quantite_stock*100/1000} />
                    })
                }
            </div>
        </section>
    );
};

export default EtatCuves;
