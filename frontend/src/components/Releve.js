import React from 'react';
import agrandir from '../assets/img/agrandir.png';

// relevés à récup dans la bd
const releves = [
    { id_incident: 1, date: '2024-03-01', description: 'Problème de pompe', niveau: 2 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
];

const Releve = () => {
    return (
        <section id="releve">
            <div className="top_container">
                <h2 className='component-title'>💸 Releve</h2>
                <img src={agrandir} id="imgAgrandir" alt="agrandir" />
            </div>
            <div className="releve-container">
                {/* pour chaque releve */}
                {releves.map((releve, index) => (
                    <div key={index} className="releve">
                        <p>ID: {releve.id_incident}</p>
                        <p>{releve.date}</p>
                        <p>Niveau: {releve.niveau}</p>
                        <span className='releve-desc'>
                            <p>{releve.description}</p>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Releve;
