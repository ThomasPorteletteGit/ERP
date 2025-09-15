import React from 'react';
import agrandir from '../../assets/img/agrandir.png';

// incident à récup dans la bd

const Incidents = ({incidents}) => {
    if(incidents.length === 0) return (<section id="incidents">
        <div className="top_container">
            <h2 className='component-title'>⚠️ Incidents</h2>
            <img src={agrandir} id="imgAgrandir" alt="agrandir" />
        </div>
        <div className="incidents-container">
            <div className="incident">
                <p>Aucun Incident a signaler</p>
            </div>
        </div>
    </section>);
    return (
        <section id="incidents">
            <div className="top_container">
                <h2 className='component-title'>⚠️ Incidents</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="incidents-container">
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
