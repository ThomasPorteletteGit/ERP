import React, { useState } from "react";

// incident à récup dans la bd
const incidentsData = [
    { id_incident: 1, date: '2024-03-01', description: 'Problème de pompe', niveau: 2 },
    { id_incident: 2, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
    { id_incident: 3, date: '2024-03-02', description: 'Fuite de carburant', niveau: 1 },
];

const IncidentsGrand = () => {
    const [incidents, setIncidents] = useState(incidentsData);
    const [newIncident, setNewIncident] = useState({
        niveau: 1,
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewIncident(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIncidents(prevIncidents => [...prevIncidents, newIncident]);
        setNewIncident({
            niveau: 1,
            description: ""
        });
    };

    return (
        <div className='container-composantGrandIncident'>
            <h2 className="component_title">⚠️ Incidents</h2>
            <div className="separator"></div>
        <div className="composantGrandIncident">
                    
            {/* Section gauche pour afficher la liste des incidents */}
            <div className="left-container">
                <h3>Détails de l'incident</h3>
                <ul>
                    {incidents.map((incident, index) => (
                        <li key={index}>
                            <strong>Niveau:</strong> {incident.niveau}, <strong>Description:</strong> {incident.description}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Section droite pour ajouter un nouvel incident et afficher les détails */}
            <div className="separatorColumn"></div>
            <div className="right-container">
                <div>
                    <h3>Ajouter un nouvel incident</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Niveau d'alerte:</label>
                            <select name="niveau" value={newIncident.niveau} onChange={handleChange}>
                                <option value={1}>Faible</option>
                                <option value={2}>Moyen</option>
                                <option value={3}>Élevé</option>
                            </select>
                        </div>
                        <div>
                            <label className="texte-description">Description:</label>
                            <textarea name="description" value={newIncident.description} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );    
    
};

export default IncidentsGrand;
