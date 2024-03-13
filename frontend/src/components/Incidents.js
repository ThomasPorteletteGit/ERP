import React from 'react';
import agrandir from '../assets/img/agrandir.png';

// incident à récup dans la bd
const incidents = [
    { id_incident: 1, date: '2024-03-01', description: 'Problème de pompe', niveau: 2 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
];

const Incidents = () => {
    return (
        <section id="incidents">
            <div className="top_container">
                <h2 className='component-title'>⚠️ Incidents</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="incidents-container">
                {/* pour chaque incidents */}
                {incidents.map((incident, index) => (
                    <div key={index} className="incident">
                        <p>ID: {incident.id_incident}</p>
                        <p>{incident.date}</p>
                        <p>Niveau: {incident.niveau}</p>
                        <span className='incident-desc'>
                            <p>{incident.description}</p>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Incidents;
