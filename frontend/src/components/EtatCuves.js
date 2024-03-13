import React from 'react';
import Cuve from './Cuve';
import agrandir from '../assets/img/agrandir.png';

const EtatCuves = () => {
    return (
        <section id="etat-cuves">
            <div className="top_container">
                <h2 className='component-title'>🛢️ Etat des cuves</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="etat-cuves-container">
                <Cuve carburant="SP-95" niveau={80} />
                <Cuve carburant="SP-98" niveau={60} />
                <Cuve carburant="Gazole" niveau={75} />
                <Cuve carburant="GPL" niveau={40} />
            </div>
        </section>
    );
};

export default EtatCuves;
