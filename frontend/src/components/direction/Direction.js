import React from 'react';
import agrandir from '../../assets/img/agrandir.png';
const directionData = [
    { id: 1, date: '2024-04-09', description: 'Mettre à jour l\'heure de fermeture de la boutique le lundi à 19h30', prix: 10 },
];

const Releve = () => {
    return (
        <section id="direction">
            <div className="top_container">
                <h2 className='component-title'>Direction</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="direction-container">
                {
                    directionData.map((incident, index) => (
                        <div key={incident.id} className="direction-details">
                            <h3>Directrice</h3>
                            <strong>Date:</strong> {incident.date}, <strong>Description:</strong> {incident.description}
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Releve;
