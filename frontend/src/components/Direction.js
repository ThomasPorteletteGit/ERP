import React from 'react';
import agrandir from '../assets/img/agrandir.png';

const Releve = () => {
    return (
        <section id="direction">
            <div className="top_container">
                <h2 className='component-title'>Direction</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="direction-container">
            </div>
        </section>
    );
};

export default Releve;
